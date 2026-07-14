const SectionHeading = ({ badge, title, description }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-400">
          {badge}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;