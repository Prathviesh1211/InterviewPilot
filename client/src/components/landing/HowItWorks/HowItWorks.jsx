import Container from "../../ui/Container";
import { HOW_IT_WORKS } from "../../../constants/howItWorks";

const HowItWorks = () => {
  return (
    <section className="pt-8 pb-12" id="how-it-works">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Prepare Smarter in
            <br />
            Four Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            InterviewPilot guides you from resume to interview
            with personalized AI-powered preparation.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {HOW_IT_WORKS.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.step}
                className="text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-400">

                  <Icon size={34} />

                </div>

                <p className="mt-6 text-sm font-semibold text-violet-400">

                  {item.step}

                </p>

                <h3 className="mt-2 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-zinc-400">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
};

export default HowItWorks;