import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/utils";

let modalRoot: Element | DocumentFragment | null;
//   document.getElementById("modal-root");

if (!document.getElementById("modal-root")) {
  const modalRootDiv = document.createElement("div");
  modalRootDiv.id = "modal-root";
  document.body.appendChild(modalRootDiv);
  modalRoot = modalRootDiv;
} else {
  if (document.getElementById("modal-root"))
    modalRoot = document.getElementById("modal-root");
}

interface ModalProps {
  isOpen: string | null;
  setClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  setClose,
  className,
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed w-full h-full z-100 top-0 left-0 flex justify-center items-center">
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
            onClick={setClose}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            className={cn(
              "z-30 rounded-3xl bg-white w-[90%] max-w-[800px]",
              className
            )}
            layoutId={isOpen}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    modalRoot!
  );
};
export default Modal;
