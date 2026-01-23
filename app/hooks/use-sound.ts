import useSound_ from "use-sound";
import type { HookOptions } from "../../node_modules/use-sound/dist/types.d.ts";
import { useMediaQuery } from "./use-media-query";

export function useSound(path: string, options?: HookOptions) {
  const isTouchDevice = useMediaQuery("(hover: none)");
  const isTinyDevice = useMediaQuery("(max-width: 480px)");
  const isMobile = isTouchDevice || isTinyDevice;

  const [play] = useSound_(path, {
    soundEnabled: !isMobile,
    ...options,
  });

  return play;
}
