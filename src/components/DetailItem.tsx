import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import { Modal } from "@/components";
import { eventMotion } from "@/utils/motions";
import { NavItem } from "@/components";

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
      <div className="w-full p-4 absolute flex justify-end">
        <motion.button
          variants={eventMotion(1.1, 0.9)}
          whileHover="hover"
          whileTap="tap"
          type="button"
          onClick={setClose}
          className="w-10 h-10 rounded-full border-black bg-white flex justify-center items-center hover:shadow-md hover:bg-red-500 hover:text-white"
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
      <div className="aspect-[5/2] w-full">
        <img
          src={selectedProject?.imgSrc}
          alt={selectedProject?.name}
          className="object-cover object-top rounded-t-3xl aspect-[5/2]"
        />
      </div>
      <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-4 overflow-y-auto">
        <h2 className="font-bold text-xl">{selectedProject?.name}</h2>
        <div className="flex gap-2 flex-wrap">
          {selectedProject?.techStacks.map((item) => (
            <span
              key={item}
              className="bg-slate-200 px-2 py-1 rounded-md text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="font-normal whitespace-pre-line max-h-[250px] overflow-y-auto">
          <p className="font-bold">
            Admin account:
            <code> admin/Qwerty6688</code>
          </p>
          {/* <br /> */}
          {selectedProject?.description}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
          <NavItem
            href={selectedProject?.source.sourceCode}
            title="Source code"
            className="w-full"
            target="_blank"
          />
          <NavItem
            href={selectedProject?.source.live}
            title="Live website"
            className="w-full"
            target="_blank"
          />
          {selectedProject?.admin && (
            <>
              <NavItem
                href={selectedProject?.admin.sourceCode}
                title="Admin source code"
                className="w-full"
                target="_blank"
              />
              <NavItem
                href={selectedProject?.admin.live}
                title="Admin live website"
                className="w-full"
                target="_blank"
              />
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DetailItem;
