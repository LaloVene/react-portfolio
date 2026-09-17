import React, { useEffect, useRef } from "react";
import { usePointerTracker } from "../hooks/usePointerTracker";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/* ------------------------------------------------------------------ *
 * Magnetic structural dot grid.
 *
 * A rigid Swiss lattice of sub-pixel marks that breathes on its own and
 * is repelled by the cursor, snapping home on a spring. Everything is
 * preallocated: the animation loop performs zero heap allocation and
 * emits at most six fill/stroke calls per frame regardless of density.
 * ------------------------------------------------------------------ */

const TAU = Math.PI * 2;

/** Nominal lattice spacing in CSS px. */
const GRID = 38;
/** Hard ceiling on lattice size; spacing widens on huge displays. */
const MAX_DOTS = 2600;
/** Cursor influence radius in CSS px. */
const INFLUENCE = 170;
const INFLUENCE_SQ = INFLUENCE * INFLUENCE;
/** Peak displacement away from the cursor, in CSS px. */
const PUSH = 26;
/** Every Nth row/column carries a structural hairline. */
const HAIRLINE_EVERY = 4;

const DOT_RADIUS = 0.9;
const GLOW_RADIUS = 1.6;
const ACCENT_HALF = 1.7;
const ACCENT_SIZE = ACCENT_HALF * 2;

const POINTER_LERP = 0.12;
const WEIGHT_RELAX = 0.05;
const SPRING = 0.085;

const BREATH_SPEED = 0.00045;
const BREATH_AMP = 0.9;
const SCROLL_AMP = 0.8;

/** Click ripple: an annulus sweeping out to INFLUENCE, then gone. */
const RIPPLE_MS = 1250;
const RIPPLE_INV_MS = 1 / RIPPLE_MS;
/** Ring thickness in CSS px — roughly one lattice cell. */
const RIPPLE_BAND = 34;
const RIPPLE_BAND_INV = 1 / RIPPLE_BAND;
/** Peak outward displacement; now above the hover PUSH so a click reads. */
const RIPPLE_PUSH = 34;
/** Concurrent ripples; double-clicks overlap instead of restarting. */
const RIPPLE_SLOTS = 3;

/** ~60fps gate. */
const FRAME_MIN_MS = 15;
/** Below this proximity a dot is not worth a second (glow) pass. */
const GLOW_CUTOFF = 0.02;

const KIND_NEUTRAL = 0;
const KIND_RED = 1;
const KIND_BLUE = 2;
const KIND_YELLOW = 3;

const FALLBACK_DOT = "18 18 18";
const FALLBACK_RED = "230 57 70";
const FALLBACK_BLUE = "29 53 87";
const FALLBACK_YELLOW = "244 208 63";
const FALLBACK_BASE_ALPHA = 0.22;
const FALLBACK_GLOW_ALPHA = 0.7;
const FALLBACK_LINE_ALPHA = 0.05;

interface Lattice {
  /** Allocated slots; arrays are grown, never shrunk. */
  capacity: number;
  count: number;
  cols: number;
  rows: number;
  spacing: number;
  originX: number;
  originY: number;
  homeX: Float32Array;
  homeY: Float32Array;
  x: Float32Array;
  y: Float32Array;
  phase: Float32Array;
  kind: Uint8Array;
  /** Dot indices sorted by kind so each colour is one contiguous run. */
  order: Int32Array;
  /** Run boundaries into `order`: [neutral, red, blue, yellow, end]. */
  groupStart: Int32Array;
  /** Scratch list of neutral dots inside the influence radius. */
  glow: Int32Array;
}

interface Palette {
  dot: string;
  glow: string;
  line: string;
  accentRed: string;
  accentBlue: string;
  accentYellow: string;
  glowAlpha: number;
  accentRestAlpha: number;
}

const EMPTY_F32 = new Float32Array(0);
const EMPTY_I32 = new Int32Array(0);
const EMPTY_U8 = new Uint8Array(0);

function createLattice(): Lattice {
  return {
    capacity: 0,
    count: 0,
    cols: 0,
    rows: 0,
    spacing: GRID,
    originX: 0,
    originY: 0,
    homeX: EMPTY_F32,
    homeY: EMPTY_F32,
    x: EMPTY_F32,
    y: EMPTY_F32,
    phase: EMPTY_F32,
    kind: EMPTY_U8,
    order: EMPTY_I32,
    groupStart: new Int32Array(5),
    glow: EMPTY_I32,
  };
}

/**
 * Rebuild the centred lattice for a viewport of `w` x `h` CSS px.
 * Runs on mount and resize only — never inside the frame loop.
 */
function layoutLattice(lat: Lattice, w: number, h: number): void {
  let spacing = GRID;
  let cols = Math.floor(w / spacing) + 1;
  let rows = Math.floor(h / spacing) + 1;
  while (cols * rows > MAX_DOTS) {
    spacing += 2;
    cols = Math.floor(w / spacing) + 1;
    rows = Math.floor(h / spacing) + 1;
  }
  const count = cols * rows;

  if (count > lat.capacity) {
    lat.homeX = new Float32Array(count);
    lat.homeY = new Float32Array(count);
    lat.x = new Float32Array(count);
    lat.y = new Float32Array(count);
    lat.phase = new Float32Array(count);
    lat.kind = new Uint8Array(count);
    lat.order = new Int32Array(count);
    lat.glow = new Int32Array(count);
    lat.capacity = count;
  }

  const originX = (w - (cols - 1) * spacing) * 0.5;
  const originY = (h - (rows - 1) * spacing) * 0.5;

  const homeX = lat.homeX;
  const homeY = lat.homeY;
  const xs = lat.x;
  const ys = lat.y;
  const phase = lat.phase;
  const kind = lat.kind;

  let nNeutral = 0;
  let nRed = 0;
  let nBlue = 0;
  let nYellow = 0;

  for (let r = 0; r < rows; r++) {
    const gy = originY + r * spacing;
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const gx = originX + c * spacing;
      homeX[i] = gx;
      homeY[i] = gy;
      xs[i] = gx;
      ys[i] = gy;
      phase[i] = (c * 0.7 + r * 1.3) % TAU;

      // Deterministic Bauhaus accents — ~7% of the field, no randomness.
      const hash = (c * 7 + r * 13) % 41;
      let k = KIND_NEUTRAL;
      if (hash === 0) {
        k = KIND_RED;
        nRed++;
      } else if (hash === 17) {
        k = KIND_BLUE;
        nBlue++;
      } else if (hash === 31) {
        k = KIND_YELLOW;
        nYellow++;
      } else {
        nNeutral++;
      }
      kind[i] = k;
    }
  }

  const groupStart = lat.groupStart;
  groupStart[0] = 0;
  groupStart[1] = nNeutral;
  groupStart[2] = nNeutral + nRed;
  groupStart[3] = nNeutral + nRed + nBlue;
  groupStart[4] = nNeutral + nRed + nBlue + nYellow;

  const order = lat.order;
  let cur0 = groupStart[0];
  let cur1 = groupStart[1];
  let cur2 = groupStart[2];
  let cur3 = groupStart[3];
  for (let i = 0; i < count; i++) {
    const k = kind[i];
    if (k === KIND_NEUTRAL) order[cur0++] = i;
    else if (k === KIND_RED) order[cur1++] = i;
    else if (k === KIND_BLUE) order[cur2++] = i;
    else order[cur3++] = i;
  }

  lat.count = count;
  lat.cols = cols;
  lat.rows = rows;
  lat.spacing = spacing;
  lat.originX = originX;
  lat.originY = originY;
}

function tokenTriplet(
  style: CSSStyleDeclaration,
  name: string,
  fallback: string,
): string {
  const raw = style.getPropertyValue(name).trim();
  return raw.length > 0 ? raw : fallback;
}

function tokenNumber(
  style: CSSStyleDeclaration,
  name: string,
  fallback: number,
): number {
  const raw = parseFloat(style.getPropertyValue(name));
  return Number.isFinite(raw) ? raw : fallback;
}

/**
 * Compose and cache the theme colours. Called on mount and whenever the
 * `class` attribute of <html> flips between light and dark.
 */
function readPalette(pal: Palette): void {
  const style = getComputedStyle(document.documentElement);
  const dot = tokenTriplet(style, "--particle-dot-rgb", FALLBACK_DOT);
  const base = tokenNumber(style, "--particle-base-alpha", FALLBACK_BASE_ALPHA);
  const glow = tokenNumber(style, "--particle-glow-alpha", FALLBACK_GLOW_ALPHA);
  const line = tokenNumber(style, "--particle-line-alpha", FALLBACK_LINE_ALPHA);

  pal.dot = "rgb(" + dot + " / " + base + ")";
  pal.glow = "rgb(" + dot + " / " + glow + ")";
  pal.line = "rgb(" + dot + " / " + line + ")";
  // Accents ramp their alpha via globalAlpha, so they stay opaque strings.
  pal.accentRed =
    "rgb(" + tokenTriplet(style, "--particle-accent-red-rgb", FALLBACK_RED) + ")";
  pal.accentBlue =
    "rgb(" +
    tokenTriplet(style, "--particle-accent-blue-rgb", FALLBACK_BLUE) +
    ")";
  pal.accentYellow =
    "rgb(" +
    tokenTriplet(style, "--particle-accent-yellow-rgb", FALLBACK_YELLOW) +
    ")";
  pal.glowAlpha = glow;
  pal.accentRestAlpha = Math.min(base * 1.6, 1);
}

/**
 * One batched paint. Six draw calls total: hairlines, neutral dots,
 * proximity glow, and one square batch per accent colour.
 */
function draw(
  ctx: CanvasRenderingContext2D,
  lat: Lattice,
  pal: Palette,
  w: number,
  h: number,
  glowCount: number,
  accentF: Float32Array,
): void {
  ctx.clearRect(0, 0, w, h);
  if (lat.count === 0) return;

  const xs = lat.x;
  const ys = lat.y;
  const order = lat.order;
  const groupStart = lat.groupStart;

  // Structural hairlines, traced through HOME positions so the Swiss
  // grid stays rigid while the marks move around it.
  const cols = lat.cols;
  const rows = lat.rows;
  const spacing = lat.spacing;
  const originX = lat.originX;
  const originY = lat.originY;
  const lastX = originX + (cols - 1) * spacing;
  const lastY = originY + (rows - 1) * spacing;
  ctx.lineWidth = 1;
  ctx.strokeStyle = pal.line;
  ctx.beginPath();
  for (let c = 0; c < cols; c += HAIRLINE_EVERY) {
    const gx = originX + c * spacing;
    ctx.moveTo(gx, originY);
    ctx.lineTo(gx, lastY);
  }
  for (let r = 0; r < rows; r += HAIRLINE_EVERY) {
    const gy = originY + r * spacing;
    ctx.moveTo(originX, gy);
    ctx.lineTo(lastX, gy);
  }
  ctx.stroke();

  // Neutral field: one path, one fill.
  const neutralEnd = groupStart[1];
  ctx.fillStyle = pal.dot;
  ctx.beginPath();
  for (let g = 0; g < neutralEnd; g++) {
    const i = order[g];
    const dx = xs[i];
    const dy = ys[i];
    ctx.moveTo(dx + DOT_RADIUS, dy);
    ctx.arc(dx, dy, DOT_RADIUS, 0, TAU);
  }
  ctx.fill();

  // Proximity glow: the same marks, brighter and fatter, drawn on top.
  if (glowCount > 0) {
    const glow = lat.glow;
    ctx.fillStyle = pal.glow;
    ctx.beginPath();
    for (let g = 0; g < glowCount; g++) {
      const i = glow[g];
      const dx = xs[i];
      const dy = ys[i];
      ctx.moveTo(dx + GLOW_RADIUS, dy);
      ctx.arc(dx, dy, GLOW_RADIUS, 0, TAU);
    }
    ctx.fill();
  }

  // Accent nodes: axis-aligned squares, one batch per colour, alpha
  // ramped as a whole group instead of per dot.
  const restAlpha = pal.accentRestAlpha;
  const glowAlpha = pal.glowAlpha;
  for (let k = KIND_RED; k <= KIND_YELLOW; k++) {
    const start = groupStart[k];
    const end = groupStart[k + 1];
    if (start >= end) continue;
    let alpha = restAlpha + (glowAlpha - restAlpha) * accentF[k];
    if (alpha > 1) alpha = 1;
    else if (alpha < 0) alpha = 0;
    ctx.globalAlpha = alpha;
    ctx.fillStyle =
      k === KIND_RED
        ? pal.accentRed
        : k === KIND_BLUE
          ? pal.accentBlue
          : pal.accentYellow;
    ctx.beginPath();
    for (let g = start; g < end; g++) {
      const i = order[g];
      ctx.rect(xs[i] - ACCENT_HALF, ys[i] - ACCENT_HALF, ACCENT_SIZE, ACCENT_SIZE);
    }
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function ParticleField(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const pointer = usePointerTracker(!reducedMotion);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lat = createLattice();
    const pal: Palette = {
      dot: "",
      glow: "",
      line: "",
      accentRed: "",
      accentBlue: "",
      accentYellow: "",
      glowAlpha: FALLBACK_GLOW_ALPHA,
      accentRestAlpha: FALLBACK_BASE_ALPHA * 1.6,
    };
    // Per-kind proximity maxima, reused every frame.
    const accentF = new Float32Array(4);

    let viewW = 0;
    let viewH = 0;
    // Viewport-client -> canvas-local mapping. `html { zoom: 95% }` makes
    // those two coordinate spaces differ, so never assume innerWidth.
    let rectLeft = 0;
    let rectTop = 0;
    let scaleX = 1;
    let scaleY = 1;
    let frame = 0;
    let resizeFrame = 0;
    let last = 0;
    // Smoothed cursor in canvas-local CSS px. Negative until first seen.
    let px = -1;
    let py = -1;
    let pointerWeight = 0;
    // Ripple slots. `ripEnv[s] > 0` marks a live ripple for the dot loop;
    // `ripStart[s] === 0` marks a free slot for the next click.
    const ripX = new Float32Array(RIPPLE_SLOTS);
    const ripY = new Float32Array(RIPPLE_SLOTS);
    const ripStart = new Float64Array(RIPPLE_SLOTS);
    const ripRadius = new Float32Array(RIPPLE_SLOTS);
    const ripEnv = new Float32Array(RIPPLE_SLOTS);
    let ripAny = false;
    let disposed = false;

    /** Re-measure the canvas' own box, then rebuild the lattice. */
    const measure = (): void => {
      const rect = canvas.getBoundingClientRect();
      viewW = canvas.clientWidth || Math.round(rect.width);
      viewH = canvas.clientHeight || Math.round(rect.height);
      rectLeft = rect.left;
      rectTop = rect.top;
      scaleX = rect.width > 0 ? viewW / rect.width : 1;
      scaleY = rect.height > 0 ? viewH / rect.height : 1;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(viewW * dpr);
      canvas.height = Math.round(viewH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layoutLattice(lat, viewW, viewH);
    };

    const step = (now: number): void => {
      const target = pointer.current;

      if (target.active) {
        // One viewport -> canvas-local conversion per frame, never per dot.
        const cx = (target.x - rectLeft) * scaleX;
        const cy = (target.y - rectTop) * scaleY;
        if (px < 0) {
          px = cx;
          py = cy;
        }
        px += (cx - px) * POINTER_LERP;
        py += (cy - py) * POINTER_LERP;
        pointerWeight += (1 - pointerWeight) * POINTER_LERP;
      } else {
        pointerWeight -= pointerWeight * WEIGHT_RELAX;
      }

      const count = lat.count;
      const homeX = lat.homeX;
      const homeY = lat.homeY;
      const xs = lat.x;
      const ys = lat.y;
      const phase = lat.phase;
      const kind = lat.kind;
      const glow = lat.glow;

      const t = now * BREATH_SPEED;
      const tSlow = t * 0.82;
      const scrollY = target.scrollY;
      const magnetic = pointerWeight > 0.001;

      let glowCount = 0;
      accentF[KIND_RED] = 0;
      accentF[KIND_BLUE] = 0;
      accentF[KIND_YELLOW] = 0;

      // Advance the ripples once per frame, never per dot.
      ripAny = false;
      for (let s = 0; s < RIPPLE_SLOTS; s++) {
        const t0 = ripStart[s];
        if (t0 === 0) continue;
        const age = (now - t0) * RIPPLE_INV_MS;
        if (age >= 1) {
          ripStart[s] = 0;
          ripEnv[s] = 0;
          continue;
        }
        const inv = 1 - age;
        // Near-linear sweep out to the hover radius (~136 px/s), only gently
        // decelerating, so the wavefront is legible rather than instant.
        ripRadius[s] = INFLUENCE * age * (1.18 - 0.18 * age);
        // Amplitude holds early and falls away late, so the ring stays strong
        // for most of its travel instead of fading from the first frame.
        ripEnv[s] = inv * inv * (3 - 2 * inv);
        ripAny = true;
      }

      for (let i = 0; i < count; i++) {
        const hx = homeX[i];
        const hy = homeY[i];
        const ph = phase[i];

        // Ambient breathing plus a scroll-driven vertical phase offset.
        let tx = hx + Math.sin(t + ph) * BREATH_AMP;
        let ty =
          hy +
          Math.cos(tSlow + ph) * BREATH_AMP +
          Math.sin((hy + scrollY * 0.35) * 0.01) * SCROLL_AMP;

        let f = 0;
        if (magnetic) {
          const dx = hx - px;
          const dy = hy - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < INFLUENCE_SQ) {
            const d = Math.sqrt(d2);
            let k = 1 - d / INFLUENCE;
            k = k * k * (3 - 2 * k); // smoothstep falloff
            f = k * pointerWeight;
            if (d > 0.0001) {
              const push = (f * PUSH) / d;
              tx += dx * push;
              ty += dy * push;
            }
          }
        }

        if (ripAny) {
          for (let s = 0; s < RIPPLE_SLOTS; s++) {
            const env = ripEnv[s];
            if (env <= 0) continue;
            const r = ripRadius[s];
            const dx = hx - ripX[s];
            const dy = hy - ripY[s];
            const d2 = dx * dx + dy * dy;
            const outer = r + RIPPLE_BAND;
            if (d2 > outer * outer) continue;
            const inner = r - RIPPLE_BAND;
            if (inner > 0 && d2 < inner * inner) continue;
            const d = Math.sqrt(d2);
            let k = 1 - Math.abs(d - r) * RIPPLE_BAND_INV;
            if (k <= 0) continue;
            k = k * k * (3 - 2 * k); // smoothstep across the band
            const g = k * env;
            if (d > 0.0001) {
              const push = (g * RIPPLE_PUSH) / d;
              tx += dx * push;
              ty += dy * push;
            }
            if (g > f) f = g;
          }
        }

        xs[i] += (tx - xs[i]) * SPRING;
        ys[i] += (ty - ys[i]) * SPRING;

        if (f > GLOW_CUTOFF) {
          const k = kind[i];
          if (k === KIND_NEUTRAL) glow[glowCount++] = i;
          else if (f > accentF[k]) accentF[k] = f;
        }
      }

      draw(ctx, lat, pal, viewW, viewH, glowCount, accentF);
    };

    const loop = (now: number): void => {
      frame = requestAnimationFrame(loop);
      if (now - last < FRAME_MIN_MS) return;
      last = now;
      step(now);
    };

    const drawStatic = (): void => {
      accentF[KIND_RED] = 0;
      accentF[KIND_BLUE] = 0;
      accentF[KIND_YELLOW] = 0;
      draw(ctx, lat, pal, viewW, viewH, 0, accentF);
    };

    const applyResize = (): void => {
      resizeFrame = 0;
      if (disposed) return;
      measure();
      if (reducedMotion) drawStatic();
    };

    // rAF-coalesced: a resize/zoom storm rebuilds the lattice once, and a
    // no-op notification (including the observer's initial fire) schedules
    // nothing at all.
    const onResize = (entries: ResizeObserverEntry[]): void => {
      if (resizeFrame !== 0) return;
      if (entries.length > 0) {
        const box = entries[0].contentRect;
        if (Math.round(box.width) === viewW && Math.round(box.height) === viewH) {
          return;
        }
      }
      resizeFrame = requestAnimationFrame(applyResize);
    };

    const onVisibility = (): void => {
      if (document.hidden) {
        if (frame !== 0) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      } else if (frame === 0) {
        last = 0; // resume without a time jump
        frame = requestAnimationFrame(loop);
      }
    };

    /** Seed a ripple at the click, reusing a free slot or the oldest one. */
    const onPointerDown = (e: PointerEvent): void => {
      const now = performance.now();
      let slot = 0;
      let oldest = Infinity;
      for (let s = 0; s < RIPPLE_SLOTS; s++) {
        const t0 = ripStart[s];
        if (t0 === 0) {
          slot = s;
          break;
        }
        if (t0 < oldest) {
          oldest = t0;
          slot = s;
        }
      }
      ripX[slot] = (e.clientX - rectLeft) * scaleX;
      ripY[slot] = (e.clientY - rectTop) * scaleY;
      ripStart[slot] = now;
      ripRadius[slot] = 0;
      ripEnv[slot] = 1;
      ripAny = true;
    };

    const onThemeChange = (): void => {
      readPalette(pal);
      if (reducedMotion) drawStatic();
    };

    readPalette(pal);
    measure();

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    // Observe the canvas' own box: viewport, orientation and html-zoom
    // changes all surface here, already in the element's local CSS px.
    const sizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(onResize);
    if (sizeObserver !== null) sizeObserver.observe(canvas);

    if (reducedMotion) {
      // One static frame, no animation loop at all.
      drawStatic();
    } else {
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      frame = requestAnimationFrame(loop);
    }

    return () => {
      disposed = true;
      if (frame !== 0) cancelAnimationFrame(frame);
      if (resizeFrame !== 0) cancelAnimationFrame(resizeFrame);
      themeObserver.disconnect();
      if (sizeObserver !== null) sizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [reducedMotion, pointer]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 -z-0 h-full w-full pointer-events-none"
      />
      <div className="bauhaus-vignette absolute inset-0" />
      <div className="bauhaus-grain absolute inset-0" />
    </div>
  );
}

export default ParticleField;
