import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Container from "../../ui/Container";
import CompanyCard from "./CompanyCard";
import { COMPANIES } from "../../../constants/companies";

const Companies = () => {
  
  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Company Preparation
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Prepare For Top Companies
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            AI-powered interview preparation tailored for your dream company.
          </p>

        </div>

        <div
          className="mt-16 overflow-hidden p-2"
          ref={emblaRef}
        >
          <div className="flex">

            {COMPANIES.map((company) => (

              <div
                key={company.id}
                className="
                min-w-0
                flex-[0_0_100%]
                px-3

                md:flex-[0_0_50%]

                xl:flex-[0_0_33.333%]
                "
              >
                <CompanyCard company={company} />
              </div>

            ))}

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Companies;