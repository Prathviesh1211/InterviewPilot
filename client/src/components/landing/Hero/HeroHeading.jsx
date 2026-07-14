import { HERO } from "../../../constants/hero";

const HeroHeading = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
        {HERO.title[0]}
      </h1>

      <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
        {HERO.title[1]}
      </h1>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        <span className="text-white">
          {HERO.title[2]}{" "}
        </span>

        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          {HERO.highlight}
        </span>
      </h1>
    </div>
  );
};

export default HeroHeading;