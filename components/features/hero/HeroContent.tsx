"use client";

import { motion } from "framer-motion"
import { ANIMATIONS } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { HeroBadge } from "./HeroBadge"
import { AppleLogo } from "@/components/icons/AppleLogo"

export function HeroContent() {
  return (
      <motion.div 
        {...ANIMATIONS.fadeIn}
        className="relative z-30 px-4 w-full max-w-[900px] mx-auto flex flex-col items-center justify-start pt-[140px]"
      >
        
        <div className="flex flex-col items-center gap-[24px] w-full mb-[48px] mt-[48px]">
          <div>
            <HeroBadge>
              #1 iMessage Automation Tool
            </HeroBadge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-[-0.02em] text-text-primary w-full leading-[1.2] md:leading-[1.2] text-center">
            <span className="text-brand-primary">iMessage</span> Automation <br className="hidden md:block" />
            for Teams and AI <br className="hidden md:block" />
            Workflows.
          </h1>

          <p className="text-base md:text-[18px] text-text-primary w-full max-w-full md:max-w-[800px] leading-[1.3] tracking-[-0.02em] font-normal text-center mx-auto px-2 md:px-0">
            Coup lets you, your team, or AI workflows send iMessages directly from <br className="hidden md:block" /> your phone number, running securely on your Mac or Mac Mini.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] z-40 w-full max-w-[414px]">
          <Button variant="brand" size="lg" className="w-[136px] h-[46px] gap-[8px] text-base font-semibold rounded-[50px]">
            Get Started
          </Button>
          <Button variant="hero-secondary" size="lg" className="w-[266px] h-[46px] gap-[12px] text-base font-medium rounded-[50px]">
             <div className="pr-3 border-r border-slate-300 mr-0 py-0.5">
                <AppleLogo className="fill-icon-primary" />
             </div>
             Download the Mac app
          </Button>
        </div>
      </motion.div>
  )
}
