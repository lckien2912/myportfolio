import { motion } from "framer-motion";

import { motionContainer } from "@/utils/motions";
import { TECH_STACKS } from "@/constants";

const itemVariant = (index: number) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 0.05 * index,
  },
});

const TechStack = () => {
  return (
    <motion.div
      variants={motionContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-6 gap-4 mt-2 justify-items-center items-center w-full  sm:max-md:w-[450px] "
    >
      {TECH_STACKS.map(({ name, src }, index) => (
        <motion.img
          variants={itemVariant(index)}
          key={name}
          src={src}
          alt={name}
          className="w-10 h-10 object-contain"
        />
      ))}
    </motion.div>
  );
};

export default TechStack;
