import { cn } from "@/utils";

interface SectionHeadingProps {
  title: string;
  iconSrc: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  iconSrc,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center md:justify-start gap-2 w-full",
        className
      )}
    >
      <img src={iconSrc} alt="" className="w-6 h-6 md:w-8 md:h-8" />
      <h1 className="font-bold text-2xl md:text-4xl font-rem">{title}</h1>
    </div>
  );
};

export default SectionHeading;
