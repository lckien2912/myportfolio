import { motion } from "framer-motion";

import { MainNav, ScrollProgress, MobileNav } from "@/components";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -75 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full backdrop-blur-sm z-50"
    >
      <div className="p-4 sm:px-8 lg:px-16 flex items-center justify-between">
        <a href="#" className="font-pacifico text-2xl">
          MyPortfolio
        </a>
        <MainNav className="hidden md:flex" />
        <MobileNav />
      </div>
      <ScrollProgress />
    </motion.header>
  );
};

export default Navbar;
