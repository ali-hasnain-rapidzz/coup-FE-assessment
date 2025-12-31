"use client";

import { motion } from "framer-motion"
import { ANIMATIONS } from "@/lib/animations"
import { WaveBackground } from "@/components/icons/WaveBackground"

export function HeroBackground() {
  return (
      <motion.div 
        {...ANIMATIONS.slideUp}
        className="absolute w-full h-auto top-[686.07px] left-0 pointer-events-none" 
        aria-hidden="true"
      >
        <WaveBackground />
      </motion.div>
  )
}
