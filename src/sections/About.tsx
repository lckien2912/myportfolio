import { Section, SectionHeading, TechStacks } from "@/components";
import profile from "@/assets/279371423_1786726214851870_7146158311886220558_n.jpg";
import infoIcon from "@/assets/ic_info_outline_128_28513.png";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-6 md:gap-12 md:flex-row md:justify-between md:items-center max-w-6xl px-6 md:px-8">
        <div className="relative max-w-[250px] md:max-w-[300px] lg:max-w-[350px] aspect-square rounded-full p-[2px] border-2 border-primary-black">
          <img
            src={profile}
            alt="Profile picture"
            className="rounded-full w-full z-10"
          />
        </div>
        <div className=" flex flex-col items-center md:max-w-[450px] gap-4">
          <SectionHeading
            title="About me"
            iconSrc={infoIcon}
            className="md:justify-start"
          />
          <p className="text-center md:text-left md:text-lg md:leading-6">
            I'm a{" "}
            <strong className="text-black">Junior ReactJS Developer</strong>{" "}
            with a passion for building friendly and quality web applications.
            I'm a quick learner and willing to learn cutting-edge technologies
            to apply to my products.
          </p>
          <TechStacks />
          {/* <motion.div
            variants={motionContainer(0.3, 0.2)}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-6 gap-4 mt-2 justify-items-center items-center w-full  sm:max-md:w-[450px] "
          >
            {DETAIL_ITEMS.map(({ title, description, iconLink }, index) => (
              <DetailItem
                key={title}
                index={index}
                title={title}
                description={description}
                imgSrc={iconLink}
              />
            ))}
          </motion.div> */}
        </div>
      </div>
    </Section>
  );
};

export default About;
