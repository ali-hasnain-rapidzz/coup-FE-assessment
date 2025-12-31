
"use client";

import { motion } from "framer-motion";
import { ANIMATIONS } from "@/lib/animations";

export function TopLeftGlow() {
  return (
    <motion.div 
      {...ANIMATIONS.fadeIn}
      className="absolute z-20 pointer-events-none left-[-92.47px] top-[-100px]"
    >
        <svg width="700" height="468" viewBox="0 0 500 334" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_146)">
            <ellipse cx="143.159" cy="-7.8811" rx="235.633" ry="220.881" fill="white" fillOpacity="1"/>
          </g>
          <defs>
            <filter id="filter0_f_1_146" x="-213.474" y="-349.762" width="713.265" height="683.762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="60.5" result="effect1_foregroundBlur_1_146"/>
            </filter>
          </defs>
        </svg>
    </motion.div>
  )
}
