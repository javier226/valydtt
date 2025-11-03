export const Background = () => {
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-bg bg-[length:400%_400%] animate-gradient-shift"
      />
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[hsl(var(--cyan))] rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};
