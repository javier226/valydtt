import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full px-[5%] py-8 flex justify-between items-center z-50 backdrop-blur-lg bg-black/50 border-b border-[hsl(var(--cyan))]/10">
      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
        VALYD
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a 
          href="#how" 
          className="text-white/80 hover:text-[hsl(var(--cyan))] transition-colors text-sm"
        >
          How It Works
        </a>
        <a 
          href="#network" 
          className="text-white/80 hover:text-[hsl(var(--cyan))] transition-colors text-sm"
        >
          The Network
        </a>
        <a 
          href="#business" 
          className="text-white/80 hover:text-[hsl(var(--cyan))] transition-colors text-sm"
        >
          For Business
        </a>
        <Button variant="default" className="rounded-full">
          Create Your AI
        </Button>
      </div>
    </nav>
  );
};
