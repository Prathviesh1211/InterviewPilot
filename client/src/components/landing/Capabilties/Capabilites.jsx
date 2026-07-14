import Container from "../../ui/Container";
import Card from "../../ui/Card";
import SectionHeading from "../Problem/SectionHeading";

import { ArrowRight } from "lucide-react";
import { CAPABILITIES } from "../../../constants/capabilities";

const Capabilities = () => {
  return (
    <section className="py-14">
      <Container>

        <SectionHeading
        //   badge="Capabilities"
          title="Everything You Need to Ace Your Software Engineering Interviews"
          description="One platform to prepare, practice, improve, and get hired."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {CAPABILITIES.map((item) => {

            const Icon = item.icon;

            return (

              <Card
                key={item.title}
                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500 group-hover:text-white">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-semibold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-zinc-400">

                  {item.description}

                </p>

                {/* <button className="mt-8 flex items-center gap-2 font-medium text-violet-400 transition-all group-hover:gap-3">

                  Learn More

                  <ArrowRight size={18} />

                </button> */}

              </Card>

            );

          })}

        </div>

      </Container>
    </section>
  );
};

export default Capabilities;