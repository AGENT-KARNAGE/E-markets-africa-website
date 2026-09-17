"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let frame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

export default function StatCounter({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const count = useCountUp(numericValue, 1200, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-10 px-8 border-l border-navy/10 first:border-l-0">
      <div className="text-4xl font-bold text-navy tracking-tight font-display">
        {started ? count : 0}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-[#6B7280] font-medium leading-snug max-w-[160px]">
        {label}
      </div>
    </div>
  );
}
