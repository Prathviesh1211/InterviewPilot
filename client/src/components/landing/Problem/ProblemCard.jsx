import { CircleX } from "lucide-react";

const ProblemCard = ({ title, description }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-violet-500/30 hover:-translate-y-1">
      <CircleX className="mb-5 h-10 w-10 text-red-400" />

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        {description}
      </p>
    </div>
  );
};

export default ProblemCard;