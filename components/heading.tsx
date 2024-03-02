interface HeadingProps {
  title: string;
  desc?: string;
  tag: string;
}

const Heading: React.FC<HeadingProps> = ({ title, desc, tag }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3.5">
        <div className="bg-primary w-14 h-1" />
        <span className="text-primary text-base uppercase">{tag}</span>
      </div>
      <span className="text-4xl font-bold">{title}</span>
      {desc && (
        <span className="text-base text-[#969696] max-w-md">{desc}</span>
      )}
    </div>
  );
};

export default Heading;
