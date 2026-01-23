"use client";

import { motion, useInView } from "motion/react";
import React from "react";
import { useSound } from "@/app/hooks/use-sound";

export default function Page() {
  const targetRef = React.useRef(null);
  const isInView = useInView(targetRef, { amount: 0.9 });
  const play = useSound("/sfx/shutter.mp3");
  // biome-ignore lint/correctness/useExhaustiveDependencies: shh!
  React.useEffect(() => {
    if (isInView) {
      play();
    }
  }, [isInView]);
  return (
    <div className="flex min-h-dvh flex-col items-center">
      <div className="h-screen" />
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        className="aspect-square w-50 border border-gray-a6 bg-white p-1 pb-8 shadow-small"
        ref={targetRef}
        variants={{
          hidden: {
            opacity: 0,
            rotate: "0deg",
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            rotate: "5deg",
            scale: 1,
          },
        }}
      >
        <div className="h-full w-full bg-conic/decreasing from-purple via-green to-purple" />
      </motion.div>
      <div className="h-screen" />
    </div>
  );
}
