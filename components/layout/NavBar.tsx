"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { ANIMATIONS } from "@/lib/animations"
import { ContactSalesButton } from "./ContactSalesButton"
import { Logo } from "@/components/icons/Logo"
import { NAV_LINKS, CONTACT_SALES_LABEL } from "@/lib/constants"

export function NavBar() {
  return (
    <motion.div 
      {...ANIMATIONS.fadeIn}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between pl-[24px] pr-[20px] py-[20px] bg-background rounded-[200px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] w-full max-w-[1200px] h-[81px]">
        <div className="flex items-center w-[106.94px] h-[34px]">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-base font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ContactSalesButton className="w-[138px] h-[41px] px-[18px] py-[11px]">
            {CONTACT_SALES_LABEL}
          </ContactSalesButton>
        </div>
      </nav>
    </motion.div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-foreground transition-colors">
      {children}
    </Link>
  )
}
