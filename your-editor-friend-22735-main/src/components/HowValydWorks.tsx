import { Bot, Sprout, Shield, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
export const HowValydWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !sectionRef.current) return;
      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionMiddle = rect.top + rect.height / 2;
      const viewportMiddle = viewportHeight / 2;

      // Only activate when section is roughly centered (within 30% of viewport center)
      const distanceFromCenter = Math.abs(sectionMiddle - viewportMiddle);
      const threshold = viewportHeight * 0.3;
      const isCentered = distanceFromCenter < threshold;
      if (isCentered && rect.top < viewportHeight && rect.bottom > 0) {
        const scrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        // Scrolling down/right
        if (e.deltaY > 0 && currentScroll < scrollableWidth - 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY * 2;
        }
        // Scrolling up/left
        else if (e.deltaY < 0 && currentScroll > 10) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY * 2;
        }
      }
    };
    window.addEventListener('wheel', handleWheel, {
      passive: false
    });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  const steps = [{
    number: "1️⃣",
    icon: Bot,
    title: "Activation",
    action: "You don't create an account — you spawn a node. A live FaceVector authenticates you as human and initializes your private cloud. Your Valyd Agent is born inside it.",
    result: "A verified identity anchored to a private key — owned and controlled only by you."
  }, {
    number: "2️⃣",
    icon: Sprout,
    title: "Encrypted Autonomy",
    action: "Your node becomes your personal vault and proof engine. All data is encrypted by your facial signature; only your live biometric can unlock it. Even Valyd can't see it.",
    result: "A sovereign identity — private, portable, cryptographically secured."
  }, {
    number: "3️⃣",
    icon: Shield,
    title: "Proof Exchange",
    action: "When verification is needed, your Agent produces zero-knowledge proofs that confirm facts without revealing data. Age, credentials, income, citizenship — proven, never exposed. Proofs are reusable across the network and revocable anytime.",
    result: "Privacy and compliance in perfect alignment."
  }, {
    number: "4️⃣",
    icon: Globe,
    title: "The Real Network",
    action: "Each proof strengthens the network's graph of verified truth — connecting humans, businesses, and AI through cryptographic trust. From social platforms to logistics, elections to onboarding — the Valyd Network becomes the internet's default verification rail.",
    result: "A verifiable internet — built on math, not belief."
  }];
  return <section ref={sectionRef} className="py-20 px-[5%] bg-gradient-to-b from-black/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          
        </div>

        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            How Valyd Works
          </h2>
          <p className="text-xl text-white/70">
            Simple mechanics. Global verification.
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-white/80 text-lg leading-relaxed">
            Every participant on Valyd — human, business, or AI — operates a private node on decentralized infrastructure.
            <br />
            <span className="text-white font-semibold">
              Each node runs a Valyd Agent: an autonomous verifier that turns data into reusable, zero-knowledge proofs.
            </span>
          </p>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden lg:block relative mb-16">
          {/* Connector Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--purple))] to-[hsl(var(--cyan))]" />
          
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
            {steps.map((step, index) => <div key={index} className="flex-shrink-0 w-[280px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in hover:bg-white/10 transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.number} {step.title}
                  </h3>
                  
                  <div className="space-y-3 flex-grow">
                    <div className="text-left">
                      <p className="text-[hsl(var(--cyan))] text-sm font-medium mb-1">Action:</p>
                      <p className="text-white/70 text-sm">{step.action}</p>
                    </div>
                    
                    <div className="text-left">
                      <p className="text-[hsl(var(--purple))] text-sm font-medium mb-1">Result:</p>
                      <p className="text-white/70 text-sm">{step.result}</p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.number} {step.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="text-[hsl(var(--cyan))] text-sm font-medium mb-1">Action:</p>
                      <p className="text-white/70 text-sm">{step.action}</p>
                    </div>
                    
                    <div>
                      <p className="text-[hsl(var(--purple))] text-sm font-medium mb-1">Result:</p>
                      <p className="text-white/70 text-sm">{step.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full text-base px-8" onClick={() => window.location.href = 'https://valyd-d47d199e.base44.app/'}>
            Claim your identity agent
          </Button>
        </div>
      </div>
    </section>;
};