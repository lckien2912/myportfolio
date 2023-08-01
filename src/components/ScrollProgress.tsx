import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 w-full h-[1px] bg-slate-900 text-primary-black origin-center -z-1"
    />
  );
};

export default ScrollProgress;
