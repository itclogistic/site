"use client";

import { useEffect, useState, type RefObject } from "react";

/** Scroll progress (0..1) through a tall sticky-header "tour" container. */
export function useTourProgress(tourRef: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const tour = tourRef.current;
      if (!tour) return;
      const scrollable = tour.offsetHeight - window.innerHeight;
      const p =
        scrollable > 0 ? Math.min(1, Math.max(0, -tour.getBoundingClientRect().top / scrollable)) : 0;
      setProgress(p);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [tourRef]);

  return progress;
}

export function tent(x: number, a: number, b: number, c: number) {
  if (x <= a || x >= c) return 0;
  if (x <= b) return (x - a) / (b - a);
  return 1 - (x - b) / (c - b);
}
