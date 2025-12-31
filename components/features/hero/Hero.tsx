import { TopLeftGlow } from "./TopLeftGlow"
import { HeroBackground } from "./HeroBackground"
import { ScrollIndicator } from "./ScrollIndicator"
import { HeroContent } from "./HeroContent"
import { Birds } from "./Birds"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden min-[1921px]:h-screen min-[1921px]:min-h-0 min-[1921px]:overflow-hidden flex flex-col items-center justify-start text-center pt-0">
      
      <TopLeftGlow />
      <Birds />
      <HeroContent />
      <HeroBackground />
      <ScrollIndicator />

    </section>
  )
}
