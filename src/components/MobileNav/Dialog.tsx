import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "@/components";
import { NAV_ITEMS } from "@/constants";
import { eventMotion } from "@/utils/motions";

interface DialogProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, handleToggle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute w-screen h-screen z-10 top-0 left-0 flex md:hidden justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeOut",
              opacity: 0.4,
              duration: 0.2,
            }}
            className="absolute bg-black w-full h-full z-20"
            onClick={handleToggle}
          />

          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            exit={{ x: 250 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            className="bg-white h-full w-full max-w-[250px] z-30"
          >
            <div className="w-full p-4">
              <motion.button
                variants={eventMotion(1.1, 0.9)}
                whileHover="hover"
                whileTap="tap"
                type="button"
                onClick={handleToggle}
                className="w-10 h-10 rounded-full flex justify-center items-center hover:shadow-md hover:bg-red-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>
            <div className="px-8">
              <nav className="flex flex-col items-end gap-4">
                {NAV_ITEMS.map(({ title, href, className }) => (
                  <NavItem
                    key={href}
                    href={href}
                    title={title}
                    className={className}
                    onClick={handleToggle}
                  />
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
