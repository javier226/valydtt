export const FeaturesBar = () => {
  const features = [
    {
      icon: "🤖",
      title: "Valyd Agents Verify",
      description: "Credentials, KYC, and KYB"
    },
    {
      icon: "🔐",
      title: "Decentralized Infrastructure",
      description: "Users own and encrypt their data"
    },
    {
      icon: "🧱",
      title: "Enterprise Compliance",
      description: "Businesses stay compliant & ransomware-resistant"
    },
    {
      icon: "🧍‍♂️",
      title: "Real Humans Only",
      description: "Everyone on Valyd is real"
    }
  ];

  return (
    <section className="py-12 px-[5%] border-t border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-4 max-w-3xl mx-auto">
          The Network That Verifies Reality.
        </h2>
        <p className="text-center text-white/60 text-sm mb-12 max-w-3xl mx-auto">
          Every node on Valyd is a verified participant — human or business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/60 text-sm mt-12">
          A Verifiable Internet for Humans and AI.
        </p>
      </div>
    </section>
  );
};
