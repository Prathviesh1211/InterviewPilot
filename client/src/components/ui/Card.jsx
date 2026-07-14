import { cn } from "../../lib/utils";

const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md p-6 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;