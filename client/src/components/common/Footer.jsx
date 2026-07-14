import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-16">
      <Container>

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <h3 className="text-2xl font-bold">
              InterviewPilot
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              AI-powered interview preparation platform for software engineers.
            </p>

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Product
            </h4>

            <ul className="mt-4 space-y-3 text-zinc-400">

              <li>Features</li>
              <li>Companies</li>
              <li>Roadmaps</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Resources
            </h4>

            <ul className="mt-4 space-y-3 text-zinc-400">

              <li>GitHub</li>
              <li>Documentation</li>
              <li>Support</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Legal
            </h4>

            <ul className="mt-4 space-y-3 text-zinc-400">

              <li>Privacy</li>
              <li>Terms</li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 InterviewPilot. All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;