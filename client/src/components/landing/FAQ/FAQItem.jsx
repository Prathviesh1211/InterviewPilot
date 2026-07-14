import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Card from "../../ui/Card";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-white">
          {question}
        </h3>

        <ChevronDown
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] mt-4"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-zinc-400 leading-7">
            {answer}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FAQItem;