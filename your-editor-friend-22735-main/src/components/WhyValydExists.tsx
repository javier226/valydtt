export const WhyValydExists = () => {
  return (
    <section className="py-32 px-[5%] bg-gradient-to-b from-black/40 to-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-white">
          Why Valyd Exists
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            For decades, the internet ran on trust — trust in logins, screenshots, signatures, and systems that could be faked.
          </p>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Then came AI.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
            <p className="text-lg text-white/70">Deepfakes blurred faces.</p>
            <p className="text-lg text-white/70">Bots flooded platforms.</p>
            <p className="text-lg text-white/70">Synthetic data rewrote truth itself.</p>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            In the AI era, belief isn't enough.
            <br />
            Every click, credential, and conversation needs <span className="bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent font-bold">cryptographic proof</span> — not faith, not assumption.
          </p>
          
          <div className="text-center py-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent">
              That's why Valyd exists.
            </p>
            <p className="text-lg md:text-xl text-white/70 mt-4">
              It replaces human trust with mathematical verification — a protocol for identity, authenticity, and integrity in a synthetic world.
            </p>
          </div>
        </div>
        
        {/* The Shift */}
        <div className="bg-gradient-to-br from-[hsl(var(--cyan))]/10 to-[hsl(var(--purple))]/10 border border-[hsl(var(--cyan))]/20 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            From Trust to Proof: The Shift
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white/60 text-center">The Old Internet</h4>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4 text-white/70">Users trusted platforms</div>
                <div className="bg-white/5 rounded-xl p-4 text-white/70">Businesses stored data</div>
                <div className="bg-white/5 rounded-xl p-4 text-white/70">AI generated content</div>
                <div className="bg-white/5 rounded-xl p-4 text-white/70">Compliance was manual</div>
                <div className="bg-white/5 rounded-xl p-4 text-white/70">Identity was central</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-[hsl(var(--cyan))] text-center">The New Internet</h4>
              <div className="space-y-3">
                <div className="bg-[hsl(var(--cyan))]/10 border border-[hsl(var(--cyan))]/30 rounded-xl p-4 text-white font-semibold">Platforms trust Valyd proofs</div>
                <div className="bg-[hsl(var(--cyan))]/10 border border-[hsl(var(--cyan))]/30 rounded-xl p-4 text-white font-semibold">Businesses verify data</div>
                <div className="bg-[hsl(var(--cyan))]/10 border border-[hsl(var(--cyan))]/30 rounded-xl p-4 text-white font-semibold">AI proves origin</div>
                <div className="bg-[hsl(var(--cyan))]/10 border border-[hsl(var(--cyan))]/30 rounded-xl p-4 text-white font-semibold">Compliance is built-in</div>
                <div className="bg-[hsl(var(--cyan))]/10 border border-[hsl(var(--cyan))]/30 rounded-xl p-4 text-white font-semibold">Identity is decentralized</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Valyd Principle */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">The Valyd Principle</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-lg font-semibold text-[hsl(var(--cyan))]">Proof replaces belief.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-lg font-semibold text-[hsl(var(--purple))]">Privacy replaces exposure.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-lg font-semibold text-white">Autonomy replaces permission.</p>
            </div>
          </div>
        </div>
        
        {/* Closing */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg md:text-xl text-white/60">
            The internet solved information.
          </p>
          <p className="text-lg md:text-xl text-white/60">
            The internet solved connection.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white">
            Now, it must solve truth.
          </p>
          <p className="text-xl md:text-2xl bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--purple))] bg-clip-text text-transparent font-bold mt-6">
            Valyd is that solution.
          </p>
        </div>
      </div>
    </section>
  );
};