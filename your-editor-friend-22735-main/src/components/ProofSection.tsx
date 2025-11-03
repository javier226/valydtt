export const ProofSection = () => {
  return <section className="py-20 px-[5%] bg-[hsl(var(--cyan))]/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-primary bg-clip-text text-transparent mb-12 text-center py-px">
          It's not just trust. It's proof.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Real Users */}
          <div className="bg-[hsl(var(--cyan))]/10 border-2 border-[hsl(var(--cyan))]/30 rounded-[20px] p-10 text-center">
            <div className="text-6xl mb-6">👤</div>
            <h3 className="text-[hsl(var(--cyan))] text-2xl font-semibold mb-4">Real Users</h3>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">Live Face Vector</p>
              <p className="text-white/70 text-sm">Live scan proves you're real and alive</p>
            </div>
            
            <div className="text-3xl text-[hsl(var(--cyan))] my-4">+</div>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">Government ID</p>
              <p className="text-white/70 text-sm">Database validates your identity</p>
            </div>
            
            <div className="text-3xl text-[hsl(var(--cyan))] my-4">=</div>
            
            <div className="bg-gradient-to-br from-[hsl(var(--cyan))]/20 to-[hsl(var(--purple))]/20 border-2 border-[hsl(var(--cyan))] rounded-xl p-6">
              <p className="text-[hsl(var(--cyan))] font-bold text-xl">✓ Verified Human</p>
            </div>
          </div>

          {/* Real Businesses */}
          <div className="bg-[hsl(var(--purple))]/10 border-2 border-[hsl(var(--purple))]/30 rounded-[20px] p-10 text-center">
            <div className="text-6xl mb-6">🏢</div>
            <h3 className="text-[hsl(var(--purple))] text-2xl font-semibold mb-4">Real Businesses</h3>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">Multiple Face Vectors</p>
              <p className="text-white/70 text-sm">Team members verified</p>
            </div>
            
            <div className="text-3xl text-[hsl(var(--purple))] my-4">+</div>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">EIN Validation</p>
              <p className="text-white/70 text-sm">Business legally registered</p>
            </div>
            
            <div className="text-3xl text-[hsl(var(--purple))] my-4">=</div>
            
            <div className="bg-gradient-to-br from-[hsl(var(--purple))]/20 to-[hsl(var(--cyan))]/20 border-2 border-[hsl(var(--purple))] rounded-xl p-6">
              <p className="text-[hsl(var(--purple))] font-bold text-xl">✓ Verified Business</p>
            </div>
          </div>

          {/* Real Content */}
          <div className="bg-white/5 border-2 border-white/20 rounded-[20px] p-10 text-center">
            <div className="text-6xl mb-6">🪪</div>
            <h3 className="text-white text-2xl font-semibold mb-4">Real Credentials</h3>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">Biometric Signature</p>
              <p className="text-white/70 text-sm">Face proof at time of creation</p>
            </div>
            
            <div className="text-3xl text-white my-4">+</div>
            
            <div className="bg-black/30 rounded-xl p-6 mb-4">
              <p className="text-white font-semibold text-lg mb-2">Timestamped Hash</p>
              <p className="text-white/70 text-sm">Blockchain immutable record</p>
            </div>
            
            <div className="text-3xl text-white my-4">=</div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white rounded-xl p-6">
              <p className="text-white font-bold text-xl">✓ Verified Credentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};