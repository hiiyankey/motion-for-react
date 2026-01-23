"use client";

import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import React from "react";

export default function Page() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  return (
    <div className="min-h-dvh flex-center">
      <div>
        <motion.form
          className="grid grid-cols-[1fr_38px]"
          layout
          onSubmit={(ev) => {
            ev.preventDefault();
            setIsSubmitted((prev) => !prev);
          }}
        >
          <input
            className="col-1 row-1 mr-3 h-8 rounded-12 bg-gray-2 px-3 shadow-border-inset"
            placeholder="your email"
          />{" "}
          <motion.button
            className="row-1 flex h-8 flex-center grow rounded-12 bg-green px-3 text-14"
            layout
            style={{
              gridColumn: isSubmitted ? "1 / span 2" : "2",
              borderRadius: 999,
            }}
            type="submit"
          >
            {isSubmitted ? (
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                className="relative mr-3 flex overflow-clip"
                initial={{ y: -10, opacity: 0 }}
                layout
                transition={{ delay: 0.25 }}
              >
                <motion.span layout>Submitted</motion.span>
              </motion.p>
            ) : (
              <motion.span
                animate={{ y: 0, opacity: 1 }}
                className="inline-block"
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                layout
              >
                <PaperPlaneIcon />
              </motion.span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
