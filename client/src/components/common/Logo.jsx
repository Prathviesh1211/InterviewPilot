import { Target } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer select-none">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
        <Target size={20} className="text-white" />
      </div>

      <span className="text-2xl font-bold tracking-tight text-white">
        InterviewPilot
      </span>
    </div>
  );
};

export default Logo;