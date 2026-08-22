const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;