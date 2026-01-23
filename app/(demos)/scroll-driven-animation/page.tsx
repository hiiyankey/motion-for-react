"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { Avatar } from "@/app/ui/avatar/avatar";

const skills = [
  {
    author: "Rauno Freiberg",
    skill: "Interactions",
  },
  {
    author: "John Doe 9",
    skill: "Engineering",
  },
  {
    author: "Thomas Wilkinson",
    skill: "Design",
  },
  {
    author: "Robert Demure 3",
    skill: "Accessibilty",
  },
];
export default function Page() {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const xRow1 = useTransform(scrollYProgress, [0.15, 0.83], [0, -300]);
  const xRow2 = useTransform(scrollYProgress, [0.15, 0.83], [0, 300]);
  const xRow3 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0.66, 0.72], [1, 0]);
  return (
    <div className="min-h-dvh">
      <div className="h-screen" />
      <div className="h-[300vh] overflow-x-clip" ref={wrapperRef}>
        <div className="translate-center-y sticky flex flex-col items-center gap-4">
          <motion.ul
            className="flex items-center space-x-6"
            style={{ scale, x: xRow1, opacity }}
          >
            {Array.from(skills, ({ author, skill }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              <li className="flex items-center" key={index}>
                <span className="mr-3">
                  <Avatar.Fallback>{author}</Avatar.Fallback>
                </span>
                <h4 className="text-32">{skill}</h4>
              </li>
            ))}
          </motion.ul>
          <motion.ul
            className="flex items-center space-x-6"
            style={{ scale, x: xRow2, opacity }}
          >
            {Array.from(skills, ({ author, skill }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              <li className="flex items-center" key={index}>
                <span className="mr-3">
                  <Avatar.Fallback>{author}</Avatar.Fallback>
                </span>
                <h4 className="text-32">{skill}</h4>
              </li>
            ))}
          </motion.ul>
          <motion.ul
            className="flex items-center space-x-6"
            style={{ scale, x: xRow3, opacity }}
          >
            {Array.from(skills, ({ author, skill }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              <li className="flex items-center" key={index}>
                <span className="mr-3">
                  <Avatar.Fallback>{author}</Avatar.Fallback>
                </span>
                <h4 className="text-32">{skill}</h4>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
}
