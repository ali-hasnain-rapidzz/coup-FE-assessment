"use client";

import { motion } from 'framer-motion';
import { ANIMATIONS } from '@/lib/animations';
import { 
  BirdTopRight, 
  BirdBottomRight1, 
  BirdBottomRight2, 
  BirdBottomLeft1, 
  BirdBottomLeft2, 
  BirdFlying 
} from './BirdSvgs';

export function Birds() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 mx-auto max-w-[1920px] text-brand-primary overflow-hidden">
      {/* Top Right Bird */}
      <motion.div 
        className="absolute w-[2.2%] min-[1920px]:w-[42.36px] h-auto min-[1920px]:h-[13.96px] top-[20%] min-[1920px]:top-[305px] right-[10%] min-[1920px]:right-auto min-[1920px]:left-[1406.18px]"
        {...ANIMATIONS.slideUp}
      >
        <BirdTopRight />
      </motion.div>

      {/* Right Middle Bird */}
      <motion.div 
        className="absolute w-[2.2%] min-[1920px]:w-[42.36px] h-auto min-[1920px]:h-[13.96px] top-[45%] min-[1920px]:top-[465px] right-[8%] min-[1920px]:right-auto min-[1920px]:left-[1446.18px]"
        {...ANIMATIONS.fadeIn}
      >
        <BirdTopRight />
      </motion.div>

      {/* Top Left Bird */}
      <motion.div 
        className="absolute w-[2.2%] min-[1920px]:w-[42.36px] h-auto min-[1920px]:h-[13.96px] top-[20%] min-[1920px]:top-[291px] left-[10%] min-[1920px]:left-[298.18px]"
        {...ANIMATIONS.slideUp}
      >
        <BirdTopRight />
      </motion.div>

      {/* Left Middle Bird */}
      <motion.div 
        className="absolute w-[2.2%] min-[1920px]:w-[42.36px] h-auto min-[1920px]:h-[13.96px] top-[35%] min-[1920px]:top-[329.02px] left-[5%] min-[1920px]:left-[495.3px]"
        {...ANIMATIONS.fadeIn}
      >
        <BirdTopRight />
      </motion.div>

      {/* Bottom Right Bird 1 */}
      <motion.div 
        className="absolute w-[6.7%] min-[1920px]:w-[128.93px] h-auto min-[1920px]:h-[101.99px] top-[85%] min-[1920px]:top-[882px] right-[5%] min-[1920px]:right-auto min-[1920px]:left-[1577.18px]"
        {...ANIMATIONS.slideUpDelayed}
      >
        <BirdBottomRight1 />
      </motion.div>

      {/* Bottom Right Bird 2 (Next to scroll) */}
      <motion.div 
        className="absolute w-[6.7%] min-[1920px]:w-[128.21px] h-auto min-[1920px]:h-[54.38px] top-[90%] min-[1920px]:top-[956px] right-[15%] min-[1920px]:right-auto min-[1920px]:left-[1263.18px]"
        {...ANIMATIONS.slideUpDelayed}
      >
        <BirdBottomRight2 />
      </motion.div>

      {/* Bottom Left Bird 1 (Next to scroll) */}
      <motion.div 
        className="absolute w-[4.5%] min-[1920px]:w-[87.74px] h-auto min-[1920px]:h-[56.99px] top-[85%] min-[1920px]:top-[881px] left-[5%] min-[1920px]:left-[665.18px]"
        {...ANIMATIONS.slideUpDelayed}
      >
        <BirdBottomLeft1 />
      </motion.div>

      {/* Bottom Left Bird 2 */}
      <motion.div 
        className="absolute w-[5.4%] min-[1920px]:w-[103.38px] h-auto min-[1920px]:h-[76.75px] top-[90%] min-[1920px]:top-[925.39px] left-[12%] min-[1920px]:left-[371.92px]"
        {...ANIMATIONS.slideUpDelayed}
      >
        <BirdBottomLeft2 />
      </motion.div>

      {/* Flying Bird Right (Flies Left) */}
      <motion.div 
        className="absolute w-[6.9%] min-[1920px]:w-[133.07px] h-auto min-[1920px]:h-[73.74px] top-[74%] min-[1920px]:top-[798px] right-[-2%] min-[1920px]:right-auto min-[1920px]:left-[1960.32px] opacity-100"
        {...ANIMATIONS.flyRight}
      >
        <BirdFlying className="scale-x-[-1]" />
      </motion.div>

      {/* Flying Bird Left (Flies Right) */}
      <motion.div 
        className="absolute w-[6.9%] min-[1920px]:w-[133.07px] h-auto min-[1920px]:h-[73.74px] top-[60%] min-[1920px]:top-[649.2px] left-[-8%] min-[1920px]:left-[-164.96px] opacity-100"
        {...ANIMATIONS.flyLeft}
      >
        <BirdFlying />
      </motion.div>
    </div>
  );
}
