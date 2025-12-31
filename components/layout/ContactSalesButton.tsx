"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactSalesButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-[43.62px] shadow-lg shadow-blue-500/20 group flex items-center justify-center whitespace-nowrap",
        "bg-brand-primary", // Default background
        className
      )}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
    >
      {/* Wipe Effect Overlay (White Background) */}
      <motion.div
        className="absolute inset-0 bg-white z-0"
        initial={{ x: "100%" }}
        variants={{
          hover: { x: "0%" },
          initial: { x: "100%" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Button Text */}
      <motion.span
        className="relative z-20 flex items-center justify-center gap-[6.98px] text-base font-medium mt-1"
        variants={{
          hover: { color: "var(--brand-primary)", scale: 0.9 }, // Brand primary + scale down
          initial: { color: "#FFFFFF", scale: 1 },
        }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
