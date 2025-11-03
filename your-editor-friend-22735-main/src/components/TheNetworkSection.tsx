export const TheNetworkSection = () => {
  return (
    <section className="py-32 px-[5%] bg-gradient-to-b from-black/20 to-[hsl(var(--cyan))]/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          The Valyd Network
        </h2>
        <p className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent">
          Infrastructure for Authenticity.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Each new node — human, business, or AI — adds a verified signal to the world's most trustworthy network.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Together, these nodes form the <span className="text-[hsl(var(--cyan))] font-semibold">Proof Graph</span> — the shared layer of truth that powers the next generation of identity, commerce, and communication.
          </p>
        </div>
        
        {/* Visual representation */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 border-2 border-[hsl(var(--cyan))]/30 rounded-3xl p-16">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center text-3xl animate-pulse">
                👤
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center text-3xl animate-pulse [animation-delay:200ms]">
                🏢
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center text-3xl animate-pulse [animation-delay:400ms]">
                👤
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center text-3xl animate-pulse [animation-delay:600ms]">
                🤖
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--purple))] flex items-center justify-center text-3xl animate-pulse [animation-delay:800ms]">
                👤
              </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-white/10 rounded-full px-6 py-3 text-white/80 text-sm">
                Verified Nodes
              </div>
              <div className="text-white/40">→</div>
              <div className="bg-[hsl(var(--cyan))]/20 border border-[hsl(var(--cyan))]/40 rounded-full px-6 py-3 text-white text-sm font-semibold">
                Proof Graph
              </div>
              <div className="text-white/40">→</div>
              <div className="bg-gradient-to-r from-[hsl(var(--cyan))]/20 to-[hsl(var(--purple))]/20 border border-[hsl(var(--purple))]/40 rounded-full px-6 py-3 text-white text-sm font-semibold">
                Verifiable Internet
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Valyd isn't another platform.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent">
            It's the infrastructure for what's real.
          </p>
        </div>
      </div>
    </section>
  );
};