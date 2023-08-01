import { useState } from "react";
import { motion } from "framer-motion";

import { eventMotion } from "@/utils/motions";
import menuIcon from "@/assets/menu_icon-icons.com_72311.png";
import Dialog from "./Dialog";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <motion.button
        type="button"
        className="block md:hidden"
        onClick={handleToggle}
        variants={eventMotion(1.1, 0.9)}
        whileHover="hover"
        whileTap="tap"
      >
        <img src={menuIcon} alt="Menu" className="w-8 h-8" />
      </motion.button>
      <Dialog isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};

export default MobileNav;
