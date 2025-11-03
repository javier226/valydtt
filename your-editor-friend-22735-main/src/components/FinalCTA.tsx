import { Button } from "./ui/button";

export const FinalCTA = () => {
  return (
    <section className="text-center py-32 px-[5%] bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 border-t border-b border-[hsl(var(--cyan))]/20">
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-white to-[hsl(var(--cyan))] bg-clip-text text-transparent font-bold">
        Align with the Valyd Network
      </h2>
      <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
        The world moved beyond "secure." Now it must become verifiable.
      </p>
      
      <div className="flex gap-6 justify-center flex-wrap mt-8">
        <Button size="lg" className="rounded-full text-base px-8" onClick={() => window.location.href = 'https://valyd-d47d199e.base44.app/'}>
          Reserve Your Node
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full text-base px-8 border-[hsl(var(--cyan))] text-[hsl(var(--cyan))] hover:bg-[hsl(var(--cyan))]/10"
        >
          Read the Protocol
        </Button>
      </div>
    </section>
  );
};
