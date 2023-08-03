import { motion } from "framer-motion";

import { cn } from "@/utils";

interface NavItemProps {
  className?: string;
  target?: string;
  href: string | undefined;
  title: string | React.ReactNode;
  variants?: string;
  onClick?: () => void;
  index?: number;
}

const NavItem: React.FC<NavItemProps> = ({
  className,
  href,
  title,
  target,
  variants = "primary",
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      className={cn(
        "font-semibold flex items-center justify-center",
        variants === "primary" &&
          "px-4 py-2 sm:py-3 bg-primary-black text-white rounded-xl  transition-colors",
        className
      )}
      whileHover={{ scale: 1.03, opacity: 0.9 }}
      whileTap={{ scale: 0.9 }}
      target={target}
      onClick={onClick}
    >
      {title}
    </motion.a>
  );
};

export default NavItem;
