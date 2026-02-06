// app/_components/unpacking/animations.ts
import { MotionValue, useTransform } from "framer-motion"

export const useHorizontalScroll = (
  scrollYProgress: MotionValue<number>
) => {
  return useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-85%"] // tweak if scenes change
  )
}
