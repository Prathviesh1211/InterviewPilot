import Container from "../../ui/Container";
import SectionHeading from "./SectionHeading";
import ProblemCard from "./ProblemCard";

import { PROBLEMS } from "../../../constants/problem";

const Problem = () => {
  return (
    <section className="pt-8 pb-14">
      <Container>

        <SectionHeading
          badge="The Problem"
          title="Interview Preparation Shouldn't Feel Overwhelming."
          description="Most students waste months jumping between random resources without a clear plan or meaningful feedback."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <ProblemCard
              key={problem.title}
              {...problem}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Problem;