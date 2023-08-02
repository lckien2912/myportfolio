import { motion } from "framer-motion";

import { cn } from "@/utils";
import { fadeIn } from "@/utils/motions";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  iconSrc,
  subtitle,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", "tween", 0, 0.5)}
      className={cn(
        "flex flex-col items-center justify-center md:justify-start gap-2 w-full",
        className
      )}
    >
      <img src={iconSrc} alt={title} className="w-10 h-10 md:w-12 md:h-12" />
      <h1 className="font-bold text-3xl md:text-4xl font-rem">{title}</h1>
      <p className="text-sm md:text-md text-center text-slate-500 px-6 md:px-8">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
