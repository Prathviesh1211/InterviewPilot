import {
  CheckCircle2,
  CircleX,
} from "lucide-react";

import Container from "../../ui/Container";
import Card from "../../ui/Card";

const Showcase = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              AI Resume Analysis
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Build an ATS-Friendly Resume
              <br />
              with AI
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Upload your resume and instantly receive an ATS score,
              missing keyword analysis, personalized suggestions,
              and actionable improvements.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-violet-400" />
                ATS Score Analysis
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-violet-400" />
                Missing Skills Detection
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-violet-400" />
                AI Resume Suggestions
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <Card className="overflow-hidden p-0">

            {/* Window */}

            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            {/* Content */}

            <div className="space-y-8 p-8">

              <div>

                <p className="text-sm text-zinc-400">
                  Resume Score
                </p>

                <h3 className="mt-2 text-5xl font-bold">
                  91
                  <span className="text-2xl text-zinc-500">
                    /100
                  </span>
                </h3>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-800">

                  <div className="h-full w-[91%] rounded-full bg-violet-500" />

                </div>

              </div>

              {/* Skills */}

              <div>

                <p className="mb-4 text-sm text-zinc-400">
                  Skills Found
                </p>

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>React</span>
                    <CheckCircle2 className="text-green-500" size={18}/>
                  </div>

                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <CheckCircle2 className="text-green-500" size={18}/>
                  </div>

                  <div className="flex justify-between">
                    <span>MongoDB</span>
                    <CheckCircle2 className="text-green-500" size={18}/>
                  </div>

                  <div className="flex justify-between">
                    <span>Docker</span>
                    <CircleX className="text-red-500" size={18}/>
                  </div>

                </div>

              </div>

              {/* Suggestions */}

              <div>

                <p className="mb-4 text-sm text-zinc-400">
                  AI Suggestions
                </p>

                <div className="space-y-3">

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-violet-400"
                      size={18}
                    />
                    Add measurable achievements
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-violet-400"
                      size={18}
                    />
                    Mention REST APIs
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-violet-400"
                      size={18}
                    />
                    Improve professional summary
                  </div>

                </div>

              </div>

            </div>

          </Card>

        </div>
      </Container>
    </section>
  );
};

export default Showcase;