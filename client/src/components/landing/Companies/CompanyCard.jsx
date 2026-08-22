import Card from "../../ui/Card";

const CompanyCard = ({ company }) => {
  return (
    <Card className="flex h-[240px] flex-col rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">

      {/* Logo */}

      <div className="flex h-18 items-center">
        <img
          src={company.logo}
          alt={company.name}
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Company */}

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white">
          {company.name}
        </h3>

        <p className="mt-2 text-zinc-400">
          {company.role}
        </p>
      </div>

      {/* Topics */}

      <div className="mt-6 flex flex-wrap gap-2">
        {company.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Push bottom content */}

      {/* <div className="mt-auto">

        <p className="mb-6 text-violet-400 font-medium">
          {company.questions}
        </p>

        <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500">
          Start Preparing
        </button>

      </div> */}

    </Card>
  );
};

export default CompanyCard;