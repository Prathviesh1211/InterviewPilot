const BackgroundGlow = () => {
  return (
    <>
      {/* Main Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
    </>
  );
};

export default BackgroundGlow;