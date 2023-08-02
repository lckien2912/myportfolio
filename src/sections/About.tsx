import { motion } from "framer-motion";

import { Section, SectionHeading, TechStacks } from "@/components";
import profile from "@/assets/279371423_1786726214851870_7146158311886220558_n.jpg";
import infoIcon from "@/assets/ic_info_outline_128_28513.png";
import { slideIn } from "@/utils/motions";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-6 md:gap-12 md:flex-row md:justify-between md:items-center max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          variants={slideIn("left", "spring", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative max-w-[250px] md:max-w-[300px] lg:max-w-[350px] aspect-square rounded-full p-[2px] border-2 border-primary-black"
        >
          <img
            src={profile}
            alt="Profile picture"
            className="rounded-full w-full z-10"
          />
        </motion.div>
        <div className=" flex flex-col items-center md:max-w-[450px] gap-4">
          <SectionHeading
            title="About me"
            subtitle="Here you will find more information about me, what I do, and my current skills"
            iconSrc={infoIcon}
            className="md:justify-start"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-center md:text-left md:text-lg md:leading-6"
          >
            I'm a{" "}
            <strong className="text-black">Junior ReactJS Developer</strong>{" "}
            with a passion for building friendly and quality web applications.
            I'm a quick learner and willing to learn cutting-edge technologies
            to apply to my products.
          </motion.p>
          <TechStacks />
        </div>
      </div>
    </Section>
  );
};

export default About;
