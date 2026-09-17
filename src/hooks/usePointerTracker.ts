// Raw pointer tracking only: this hook mutates a single ref in place and never
// calls setState, so it triggers zero re-renders and schedules no animation
// frames. The consumer owns all smoothing, easing and rAF scheduling.

import React, { useEffect, useRef } from "react";

export interface PointerTarget {
  /** last known pointer position in CSS px, viewport coords; -1 when never seen */
  x: number;
  y: number;
  /** true while the pointer is inside the viewport and has moved at least once */
  active: boolean;
  /** performance.now() timestamp of the last move */
  lastMoveAt: number;
  /** window.scrollY at last sample */
  scrollY: number;
}

export function usePointerTracker(
  enabled: boolean = true,
): React.RefObject<PointerTarget> {
  const target = useRef<PointerTarget>({
    x: -1,
    y: -1,
    active: false,
    lastMoveAt: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const current = target.current;

    if (!enabled) {
      // Let any consumer animation settle back to its rest state.
      current.active = false;
      return;
    }

    const passive = { passive: true } as const;
    const root = document.documentElement;

    // Accept every pointer type: mouse, pen and touch.
    const handleMove = (event: PointerEvent) => {
      current.x = event.clientX;
      current.y = event.clientY;
      current.active = true;
      current.lastMoveAt = performance.now();
    };

    const handleRelease = (event: PointerEvent) => {
      // Touch has no hover state, so a lift means "no pointer".
      if (event.pointerType === "touch") {
        current.active = false;
      }
    };

    const handleLeave = () => {
      current.active = false;
    };

    const handleScroll = () => {
      current.scrollY = window.scrollY;
    };

    current.scrollY = window.scrollY;

    window.addEventListener("pointermove", handleMove, passive);
    window.addEventListener("pointerdown", handleMove, passive);
    window.addEventListener("pointerup", handleRelease, passive);
    window.addEventListener("pointercancel", handleRelease, passive);
    window.addEventListener("blur", handleLeave, passive);
    window.addEventListener("scroll", handleScroll, passive);
    root.addEventListener("mouseleave", handleLeave, passive);
    root.addEventListener("pointerleave", handleLeave, passive);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleMove);
      window.removeEventListener("pointerup", handleRelease);
      window.removeEventListener("pointercancel", handleRelease);
      window.removeEventListener("blur", handleLeave);
      window.removeEventListener("scroll", handleScroll);
      root.removeEventListener("mouseleave", handleLeave);
      root.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled]);

  return target;
}

export default usePointerTracker;
