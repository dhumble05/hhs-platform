"use client";

import { useEffect, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  startValue?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  delay?: number;
};

export default function AnimatedMetric({
  value,
  startValue = 0,
  suffix = "",
  prefix = "",
  duration = 10000,
  decimals = 0,
  delay = 0,
}: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    let animationFrame = 0;
    let delayTimer = 0;
    let startTime: number | null = null;
    let isCancelled = false;

    const animate = (timestamp: number) => {
      if (isCancelled) return;

      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const nextValue =
        startValue + (value - startValue) * easedProgress;

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    delayTimer = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      isCancelled = true;
      window.clearTimeout(delayTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, duration, startValue, value]);

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}