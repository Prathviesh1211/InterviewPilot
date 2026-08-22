import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef(
  (
    {
      label,
      error,
      className,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-zinc-200">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          className={cn(
            "h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-200",
            "focus:border-violet-500 focus:bg-zinc-900/70 focus:ring-2 focus:ring-violet-500/20",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;