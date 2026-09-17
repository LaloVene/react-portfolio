import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/** Older Safari/jsdom stubs only expose the deprecated listener API. */
type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (handler: (event: MediaQueryListEvent) => void) => void;
  removeListener?: (handler: (event: MediaQueryListEvent) => void) => void;
};

function matchReducedMotion(): LegacyMediaQueryList | null {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }
  return window.matchMedia(QUERY) as LegacyMediaQueryList;
}

/**
 * Tracks the OS "reduce motion" preference and stays live: flipping the
 * system setting updates consumers without a reload.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => matchReducedMotion()?.matches ?? false,
  );

  useEffect(() => {
    const mediaQuery = matchReducedMotion();
    if (!mediaQuery) {
      return;
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Re-sync in case the preference changed between render and subscribe.
    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener?.(handleChange);
      };
    }

    // No subscription API available: keep the initial value.
    return;
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
