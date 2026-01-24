"use client";

import { motion } from "motion/react";
import React from "react";

export default function Page() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="min-h-dvh flex-center">
      <div className="flex h-10 items-center">
        <div className="flex items-center space-x-2 p-1">
          {Array.from(["Home", "Craft", "Writing"], (title, index) => (
            <button
              className="relative p-1 px-3"
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              key={index}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className="inline-block text-14">{title}</span>{" "}
              {activeIndex === index && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-full bg-blue"
                  layoutId="Indicator"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
