import Container from "../../ui/Container";
import FAQItem from "./FAQItem";
import {FAQS} from "../../../constants/faqs"

const FAQ = () => {
  return (
    <section className="py-8">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know before getting started.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">

          {FAQS.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default FAQ;