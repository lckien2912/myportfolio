import { motion } from "framer-motion";

import { cn } from "@/utils";
import { eventMotion } from "@/utils/motions";

interface ProjectItemProps {
  name: string;
  className?: string;
  imgSrc: string;
  description: string;
  layoutId?: string;
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  name,
  className,
  description,
  layoutId,
  onClick,
}) => {
  return (
    <motion.div
      variants={eventMotion(1.02, 0.9)}
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "bg-[rgba(255,255,255,0.6)] p-4 flex gap-4 md:gap-6 rounded-2xl border-2 hover:shadow-md flex-col backdrop-blur-sm",
        className
      )}
      layoutId={layoutId}
      onClick={onClick}
    >
      <div className="aspect-video w-full">
        <img
          src={imgSrc}
          alt={name}
          className="object-cover object-center rounded-xl"
        />
      </div>
      <div className={cn("flex flex-col gap-2 h-full")}>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="line-clamp-3 overflow-hidden">{description}</p>
        <div className="flex-1 flex items-end mt-5 md:mt-4">
          <div className="flex justify-self-end gap-4 w-full">
            <motion.button
              variants={eventMotion(1.02, 0.9)}
              whileHover="hover"
              whileTap="tap"
              type="button"
              onClick={onClick}
              className="flex-1 px-4 py-2 bg-primary-black text-white rounded-xl whitespace-nowrap"
            >
              Project details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
