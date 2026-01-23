"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, stagger } from "motion/react";
import React from "react";

export default function Page() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  return (
    <div className="min-h-dvh">
      <motion.div
        animate={{ width: menuIsOpen ? 256 : 56 }}
        className="h-screen bg-gray-2 p-3.5"
        initial={{ width: 56 }}
      >
        <button
          className="mb-6 size-6.5 flex-center rounded-4 bg-gray-a3"
          onClick={() => setMenuIsOpen((prev) => !prev)}
          type="button"
        >
          <span>
            <HamburgerMenuIcon />
          </span>
        </button>

        <AnimatePresence>
          {menuIsOpen && (
            <motion.nav
              animate={menuIsOpen ? "slideIn" : "slideOut"}
              exit={"slideOut"}
              initial={"slideOut"}
              variants={{
                slideIn: {
                  transition: {
                    delayChildren: stagger(0.1, { from: "first" }),
                  },
                },
                slideOut: {
                  transition: { delayChildren: stagger(0.1, { from: "last" }) },
                },
              }}
            >
              <ul className="flex flex-col space-y-2">
                {Array.from(["Home", "Craft", "Writing"], (title, index) => (
                  <motion.li
                    className="text-18"
                    // biome-ignore lint/suspicious/noArrayIndexKey: shh!
                    key={index}
                    variants={{
                      slideIn: { x: 0, opacity: 1 },
                      slideOut: { x: -100, opacity: 0 },
                    }}
                  >
                    {title}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
