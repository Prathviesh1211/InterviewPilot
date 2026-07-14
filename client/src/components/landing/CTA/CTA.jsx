import Container from "../../ui/Container";

const CTA = () => {
  return (
    <section className="py-20">
      <Container>

        <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-zinc-950 p-10 md:p-16">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Ace Your Next Interview?
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Join InterviewPilot and prepare smarter with AI-powered resume
              analysis, personalized roadmaps, mock interviews, and coding
              practice.
            </p>

            <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 font-semibold transition-all duration-300 hover:bg-violet-500 hover:scale-105">
              Get Started
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default CTA;