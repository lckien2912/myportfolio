import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import { Modal } from "@/components";
import { eventMotion } from "@/utils/motions";

interface DetailItemProps {
  selectedId: string | null;
  setClose: () => void;
}

const DetailItem: React.FC<DetailItemProps> = ({ selectedId, setClose }) => {
  const selectedProject = PROJECTS.find(({ name }) => name === selectedId);

  return (
    <Modal
      isOpen={selectedId}
      setClose={setClose}
      className="flex flex-col relative"
    >
      <div className="w-full p-4 absolute">
        <motion.button
          variants={eventMotion(1.1, 0.9)}
          whileHover="hover"
          whileTap="tap"
          type="button"
          onClick={setClose}
          className="w-10 h-10 rounded-full flex justify-center items-center hover:shadow-md hover:bg-red-500 text-white"
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
      <div className="aspect-video w-full">
        <img
          src={selectedProject?.imgSrc}
          alt={selectedProject?.name}
          className="object-cover object-center rounded-t-3xl"
        />
      </div>
      <div className="p-8 md:p-10 flex flex-col gap-4">
        <h2 className="font-bold text-2xl">{selectedProject?.name}</h2>
        <p>{selectedProject?.description}</p>
        <div className="flex gap-2 flex-wrap">
          {selectedProject?.techStacks.map((item) => (
            <span className="bg-slate-200 px-2 py-1 rounded-md">{item}</span>
          ))}
        </div>
        <div className=""></div>
      </div>
    </Modal>
  );
};

export default DetailItem;
