import { Button } from "./ui/button";

export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-[5%] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d" />
      <div className="absolute w-[200px] h-[200px] top-[60%] right-[10%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d [animation-delay:5s]" />
      <div className="absolute w-[150px] h-[150px] bottom-[10%] left-[15%] rounded-[20px] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 backdrop-blur-lg border border-[hsl(var(--cyan))]/20 animate-float-3d [animation-delay:10s]" />

      <div className="max-w-6xl text-center z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent tracking-tight">
          The Privacy-First Proof Layer of the New Internet
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
          In a world of deepfakes, bots, and synthetic data—Valyd anchors what's real.
          <br />
          <span className="text-white/90">
            Every verified human, credential, and action online runs on Valyd.
          </span>
        </h2>

        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <Button size="lg" className="rounded-full text-base px-8" onClick={() => window.location.href = 'https://valyd-d47d199e.base44.app/'}>
            Reserve Your Node
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))]/10">
            See the Network
          </Button>
        </div>

        
      </div>
    </section>;
};