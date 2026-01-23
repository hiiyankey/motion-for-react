"use client";

import { BellIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, stagger } from "motion/react";
import React from "react";
import { Avatar } from "@/app/ui/avatar/avatar";

const notifications = [
  {
    author: "Rauno Freiberg",
    message: "Howdy",
    createdAt: "1s",
  },
  {
    author: "John Doe 9",
    message: "What's happening",
    createdAt: "2m",
  },
  {
    author: "Thomas Wilkinson",
    message: "Touch grass",
    createdAt: "1h",
  },
  {
    author: "Robert Demure 3",
    message: "See you soon",
    createdAt: "2d",
  },
];
export default function Page() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="min-h-dvh flex-center">
      <div className="flex h-90 w-80 flex-col items-center">
        <button
          className="mb-6 size-6.5 flex-center rounded-4 bg-gray-3"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span>
            <BellIcon />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              animate="open"
              className="flex w-full grow flex-col justify-between divide-y divide-gray-3 rounded-12 bg-gray-2 shadow-border-inset"
              exit="closed"
              initial="closed"
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: stagger(0.1, { from: "first" }),
                  },
                },
                closed: {
                  opacity: 0,
                  y: 20,
                  transition: { delayChildren: stagger(0.1, { from: "last" }) },
                },
              }}
            >
              <h3 className="p-2 px-4 text-14 text-gray-11">Notification</h3>
              {Array.from(
                notifications,
                ({ author, message, createdAt }, index) => (
                  <motion.div
                    className="flex items-center p-2 px-4 first:pt-4 last:pb-4 max-sm:translate-y-(--y) sm:translate-x-(--x)"
                    // biome-ignore lint/suspicious/noArrayIndexKey: shh!
                    key={index}
                    variants={{
                      open: {
                        opacity: 1,
                        "--x": "0px",
                        "--y": "0px",
                      },
                      closed: {
                        opacity: 0,
                        "--x": "30px",
                        "--y": "30px",
                      },
                    }}
                  >
                    <span className="mr-3">
                      <Avatar.Fallback size={40}>{author}</Avatar.Fallback>
                    </span>
                    <div className="flex flex-col">
                      <p>{message}</p>
                      <span className="text-14 text-gray-11">{createdAt}</span>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
