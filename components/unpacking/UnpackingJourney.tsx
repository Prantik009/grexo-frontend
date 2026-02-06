// app/_components/unpacking/UnpackingJourney.tsx
"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

import { journeyScenes } from "./data"
import { JourneyScene } from "./JourneyScene"
import { useHorizontalScroll } from "./animations"

export const UnpackingJourney = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useHorizontalScroll(scrollYProgress)

  return (
    <section className="">
      {/* ---------- DESKTOP VERSION ---------- */}
      <div
        ref={containerRef}
        className="relative hidden md:block h-[500vh]"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-24 px-24"
          >
            {journeyScenes.map((scene) => (
              <JourneyScene
                key={scene.id}
                title={scene.title}
                description={scene.description}
                image={scene.image}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------- MOBILE VERSION ---------- */}
      <div className="md:hidden px-4 py-16 space-y-16">
        {journeyScenes.map((scene) => (
          <div key={scene.id}>
            <JourneyScene
              title={scene.title}
              description={scene.description}
              image={scene.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
