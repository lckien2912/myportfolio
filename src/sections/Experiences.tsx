import { Section, SectionHeading } from "@/components";
import { TECH_STACKS } from "@/constants";
import headerIcon from "@/assets/student_work_office_desk_work_space_computer_working_support_icon_191191.png";
import experiencesIcon from "@/assets/experiences.png";
import skillsIcon from "@/assets/coding_computer_pc_screen_code_icon_193955.png";

const Experiences = () => {
  return (
    <Section
      id="experiencesAndSkills"
      className="bg-experience-pattern w-full bg-cover bg-center flex-col gap-12 p-4"
    >
      <div className="flex items-center justify-center md:justify-start gap-2">
        {/* <img src={headerIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" /> */}
        <SectionHeading iconSrc={headerIcon} title="Experiences & Skills" />
      </div>
      <div className="flex flex-col gap-4 gap-y-12 text-xl">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex flex-row-reverse md:flex-col items-center gap-2 md:gap-0 md:items-end pb-2 border-b-2 md:pb-0 md:border-b-0 md:pr-12 md:border-r-2 border-primary-black">
            <h2 className="text-left md:text-right w-full font-bold ">
              Experiences
            </h2>
            <img
              src={experiencesIcon}
              className="w-10 h-10 md:w-32 md:h-32 aspect-square"
            />
          </div>
          <div className="max-w-[29rem] space-y-1 md:space-y-2 text-base md:text-lg">
            <p>5/2022 - 10/2022</p>
            <h3 className="font-bold">ReactJS Developer</h3>
            <p className="font-semibold">NAL Vietnam JSC</p>
            <code className="leading-6 mt-4 block">
              Tech Stacks: ReactJS, React Router, React Hook Form, SASS, Axios,
              Typescript, .etc
            </code>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4">
          <div className="grid grid-cols-6 gap-2 md:gap-4 justify-items-center items-center ">
            {TECH_STACKS.map(({ name, src }) => (
              <img
                key={name}
                src={src}
                alt={name}
                className="md:w-14 md:h-14 w-10 h-10 object-contain"
              />
            ))}
          </div>
          <div className="flex flex-row-reverse md:flex-col items-center gap-2 md:gap-0 md:items-start pb-2 border-b-2 md:pb-0 md:border-b-0 md:pl-12 md:border-l-2 border-primary-black">
            <h2 className="text-right md:text-left font-bold ">Skills</h2>
            <img
              src={skillsIcon}
              className="w-10 h-10 md:w-32 md:h-32 aspect-square"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
