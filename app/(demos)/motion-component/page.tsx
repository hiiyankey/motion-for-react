"use client";

import { motion } from "motion/react";

type Props = React.ComponentProps<"button">;
function Button({ ref, ...props }: Props) {
  return (
    <button ref={ref} {...props}>
      Motion Component
    </button>
  );
}
const MotionButton = motion(Button);
export default function Page() {
  return (
    <div className="min-h-dvh flex-center">
      <MotionButton />
    </div>
  );
}
