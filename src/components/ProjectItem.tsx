import { motion } from "framer-motion";

import { cn } from "@/utils";
import { fadeIn } from "@/utils/motions";

interface ProjectItemProps {
  name: string;
  className?: string;
  imgSrc: string;
  description: string;
  layoutId?: string;
  onClick: () => void;
  index?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  name,
  className,
  description,
  layoutId,
  onClick,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.1 * index!, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "bg-[rgba(255,255,255,1)] flex rounded-2xl border-2 shadow-sm hover:shadow-lg flex-col cursor-pointer",
        className
      )}
      layoutId={layoutId}
      onClick={onClick}
    >
      <div className="aspect-video w-full">
        <img
          src={imgSrc}
          alt={name}
          className="object-cover object-center rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col gap-2 h-full p-6">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="line-clamp-3 overflow-hidden">{description}</p>
        <div className="w-full mt-5 md:mt-4">
          <motion.button
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 1 }}
            type="button"
            onClick={onClick}
            className="flex-1 w-full px-4 py-3 bg-primary-black text-white rounded-xl whitespace-nowrap"
          >
            Project details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
