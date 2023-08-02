import { TypeAnimation } from "react-type-animation";

import { NavItem, Section } from "@/components";
import profile from "@/assets/profile.jpg";
import { HELLO_LINK_ITEMS } from "@/constants";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motions";
import CV from "@/assets//Le Chi Kien - Front-end Engineer.pdf";

const Hello = () => {
  return (
    <Section
      id="home"
      className="bg-hello-pattern w-screen bg-cover bg-center px-4 md:px-8 flex-col"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:gap-20 md:flex-row md:justify-between md:items-center">
        <div className="min-w-[200px] max-w-[320px] md:w-[320px] flex flex-col items-center md:items-start gap-4 md:gap-6">
          <TypeAnimation
            className="md:whitespace-pre-line text-3xl md:text-5xl font-bold md:text-left text-center font-rem md:w-[320px]  md:h-24"
            sequence={[`Hi, \nI'm Kien👋`, 2000]}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-slate-600 font-semibold md:text-left text-center text-lg"
          >
            A passionate{" "}
            <strong className="text-black">React Developer </strong>
            living and working in Hanoi, Vietnam.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex gap-5"
          >
            {HELLO_LINK_ITEMS.map(({ title, href }) => (
              <NavItem
                key={href}
                href={href}
                title={title}
                className="w-[40px] md:w-[48px]"
                target="_blank"
                variants="ghost"
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex gap-5"
          >
            <NavItem
              title="See my CV"
              href={CV}
              className="sm:py-2"
              target="_blank"
            />
            <NavItem title="Hire me" href="#contact" className="sm:py-2" />
          </motion.div>
        </div>
        <motion.div
          variants={zoomIn(0, 0.5)}
          initial="hidden"
          animate="show"
          className="border-2 border-primary-black rounded-[50px] aspect-square max-w-[250px] md:max-w-[300px] lg:max-w-[350px] p-[2px] xl:w-full"
        >
          <img
            src={profile}
            alt="Profile picture"
            className="rounded-[46px] w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hello;
