import { Check, Sparkles } from "lucide-react";

const FEATURES = [
  "AI Resume Analysis",
  "AI Mock Interviews",
  "Personalized Roadmaps",
];

const AuthHero = () => {
  return (
    <div className="w-full max-w-xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1.5 text-xs font-medium text-violet-300">
        <Sparkles size={14} />
        AI INTERVIEW PREPARATION
      </div>

      {/* Heading */}
      <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white">
        Prepare for interviews
        <br />
        <span className="text-zinc-400">like you mean it.</span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
        AI-powered preparation built for software engineers. Practice smarter,
        identify your weak spots, and walk into your next interview with
        confidence.
      </p>

      {/* Features */}
      <div className="mt-6 space-y-2.5">
        {FEATURES.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 text-sm text-zinc-300"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
              <Check size={12} strokeWidth={2.5} />
            </div>

            {feature}
          </div>
        ))}
      </div>

      {/* Mini Product Preview */}
      <div className="mt-7 w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 shadow-2xl shadow-violet-950/10 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500">
              Interview Readiness
            </p>

            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-white">
                84%
              </span>

              <span className="text-xs text-emerald-400">
                ↑ 12%
              </span>
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles size={16} className="text-violet-400" />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-zinc-500">
            Keep building momentum
          </span>

          <span className="text-zinc-400">
            84 / 100
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthHero;