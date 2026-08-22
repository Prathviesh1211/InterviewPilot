const InterviewReadinessCard = () => {
  const skills = [
    { name: "Resume", score: 92 },
    { name: "React", score: 88 },
    { name: "Backend", score: 81 },
    { name: "DSA", score: 76 },
  ];

  return (
    <div className="mt-8 w-full max-w-xl rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            Interview Readiness
          </p>

          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">
              84
            </span>

            <span className="text-lg text-zinc-500">
              /100
            </span>
          </div>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          +12% this month
        </span>
      </div>

      {/* Skills */}
      <div className="mt-6 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-zinc-300">
                {skill.name}
              </span>

              <span className="font-medium text-zinc-200">
                {skill.score}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-zinc-800/80 pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
            ✦
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Personalized for you
            </p>

            <p className="mt-0.5 text-xs text-zinc-500">
              Your preparation roadmap adapts as you improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewReadinessCard;