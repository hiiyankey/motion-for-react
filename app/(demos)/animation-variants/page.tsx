"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import React from "react";
import { Avatar } from "@/app/ui/avatar/avatar";

const quotes = [
  { author: "Rauno Freiberg", quote: "The best work is done slowly." },
  {
    author: "John Doe 9",
    quote:
      "Financial security isn't luxury & retiring, it's the freedom to take risks, explore, build.",
  },
  {
    author: "Thomas Wilkinson",
    quote:
      "Taste is maybe the biggest deciding factor in whether a product ends up *feeling* good or not, regardless of how much skill is involved.",
  },
  {
    author: "Robert Demure 3",
    quote:
      "A simple goal you should always have as a designer—or any kind of creator, really—is to make something that inspires others.",
  },
];

export default function Page() {
  const [activeQuoteIndex, setActiveQuoteIndex] = React.useState(0);
  const lastQuoteIndex = quotes.length - 1;
  const [hovering, setHovering] = React.useState(false);
  const previous = () => {
    setActiveQuoteIndex((curent) => {
      return curent === 0 ? lastQuoteIndex : curent - 1;
    });
  };
  const next = () => {
    setActiveQuoteIndex((curent) => {
      return curent === lastQuoteIndex ? 0 : curent + 1;
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: shh!
  React.useEffect(() => {
    if (hovering) {
      return; // paused
    }
    const id = setTimeout(() => {
      next();
    }, 2000);
    return () => clearTimeout(id);
  }, [activeQuoteIndex, hovering]);

  return (
    <div className="min-h-dvh flex-center">
      <motion.div
        animate={`quote-${activeQuoteIndex}`}
        className="group relative flex h-50 w-90 flex-col items-center overflow-clip rounded-12 bg-gray-2 shadow-border-inset"
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        variants={{
          [`quote-${activeQuoteIndex}`]: {},
        }}
      >
        <div className="flex gap-4 py-4">
          {Array.from(quotes, ({ author }, index) => (
            <motion.span
              initial={{ scale: 1 }}
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              key={index}
              variants={{
                [`quote-${index}`]: {
                  scale: 1.2,
                },
              }}
            >
              {" "}
              <Avatar.Fallback size={40}>{author}</Avatar.Fallback>
            </motion.span>
          ))}
        </div>
        <div className="grid-stack px-4">
          {Array.from(quotes, ({ quote }, index) => (
            <motion.p
              className="text-18"
              initial={{ opacity: 0, y: 20 }}
              // biome-ignore lint/suspicious/noArrayIndexKey: shh!
              key={index}
              variants={{
                [`quote-${index}`]: {
                  opacity: 1,

                  y: 0,
                },
              }}
            >
              {quote}
            </motion.p>
          ))}
        </div>
        <div>
          <button
            className="translate-center-y absolute left-2 size-6.5 flex-center -translate-x-[150%] rounded-full bg-black/12 backdrop-blur-[12px] transition-transform duration-200 ease-swift group-hover:translate-x-0"
            onClick={previous}
            type="button"
          >
            <span>
              <ChevronLeftIcon />
            </span>
          </button>
          <button
            className="translate-center-y absolute right-2 size-6.5 flex-center translate-x-[150%] rounded-full bg-black/12 backdrop-blur-[12px] transition-transform duration-200 ease-swiftrounded-full group-hover:translate-x-0"
            onClick={next}
            type="button"
          >
            <span>
              <ChevronRightIcon />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
