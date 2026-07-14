import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
      <Sparkles className="h-4 w-4" />

      <span>Your Personal AI Interview Coach</span>
    </div>
  );
};

export default HeroBadge;