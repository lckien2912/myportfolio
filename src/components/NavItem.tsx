import { motion } from "framer-motion";

import { cn } from "@/utils";

interface NavItemProps {
  className?: string;
  target?: string;
  href: string;
  title: string | React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  className,
  href,
  title,
  target,
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      className={cn(
        "font-semibold flex items-center justify-center",
        className
      )}
      whileHover={{ scale: 1.05, opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      target={target}
      onClick={onClick}
    >
      {title}
    </motion.a>
  );
};

export default NavItem;
