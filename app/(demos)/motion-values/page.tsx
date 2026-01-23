"use client";

import { motion, useMotionValue, useTransform } from "motion/react";

export default function Page() {
  const sliderValue = useMotionValue(0);
  const borderRadius = useTransform(sliderValue, [0, 5], ["6px", "50%"]);
  return (
    <div className="min-h-dvh flex-center">
      <motion.div
        className="aspect-square w-50 rounded-6 bg-gray-3"
        style={{ borderRadius }}
      />
      <div className="absolute bottom-24 w-fit">
        <label className="flex" htmlFor="slider">
          <h4 className="text-12">Border Radius</h4>
          <motion.span className="ml-auto inline-block font-mono text-12 text-gray-11">
            {sliderValue}
          </motion.span>
        </label>
        <input
          className="h-1 cursor-pointer appearance-none bg-gray-3 accent-orange [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-12 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-12"
          id="slider"
          max={5}
          min={0}
          onChange={(ev) => sliderValue.set(Number.parseFloat(ev.target.value))}
          step={0.01}
          type="range"
        />
      </div>
    </div>
  );
}
