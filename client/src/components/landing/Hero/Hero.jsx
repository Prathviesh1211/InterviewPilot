import Container from "../../ui/Container";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";
import HeroDashboard from "./HeroDashboard";

import { HERO } from "../../../constants/hero";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-10 lg:pt-14 lg:pb-14">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative z-10">

            <HeroBadge />

            <div className="mt-8">

              <HeroHeading />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

              {HERO.description}

            </p>

            <div className="mt-10">

              <HeroButtons />

            </div>

            <HeroFeatures />

          </div>

          {/* RIGHT */}

          <HeroDashboard />

        </div>

      </Container>

    </section>
  );
};

export default Hero;