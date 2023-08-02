import { motion } from "framer-motion";

import { cn } from "@/utils";
import { staggerContainer } from "@/utils/motions";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id={id}
      className={cn(
        "w-full max-auto flex justify-center items-center min-h-screen py-24",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

export default Section;
