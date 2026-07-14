import { CheckCircle2 } from "lucide-react";
import { HERO } from "../../../constants/hero";

const HeroFeatures = () => {
  return (
    <div className="flex flex-wrap gap-6 pt-4">
      {HERO.features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-2 text-zinc-400"
        >
          <CheckCircle2 className="h-5 w-5 text-violet-400" />

          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;