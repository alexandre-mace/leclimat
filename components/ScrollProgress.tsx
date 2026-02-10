"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "energySources",
  "oldIssue",
  "ghe",
  "ghg",
  "hugeRise",
  "temperatureRise",
  "climateFutur",
  "consequences",
  "hyperthermia",
  "fire",
  "drought",
  "biodiversity",
  "food",
  "glacier",
  "seaRise",
  "disease",
  "nonLinear",
  "justice",
  "inertia",
  "limitParis",
  "responsable",
  "individual-solutions",
];

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);

      let active = -1;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          active = i;
          break;
        }
      }
      setCurrentIndex(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative">
      <div className="h-1 w-full">
        <div
          className="h-full bg-slate-900 dark:bg-slate-100 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      {currentIndex >= 0 && (
        <div className="absolute right-3 top-2 text-xs text-slate-400 dark:text-slate-500 tabular-nums">
          {currentIndex + 1}/{sectionIds.length}
        </div>
      )}
    </div>
  );
};

export default ScrollProgress;
