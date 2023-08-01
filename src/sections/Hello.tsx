import { TypeAnimation } from "react-type-animation";

import { NavItem, Section } from "@/components";
import profile from "@/assets/profile.jpg";
import { HELLO_LINK_ITEMS } from "@/constants";

const Hello = () => {
  return (
    <Section
      id="home"
      className="bg-hello-pattern w-screen bg-cover bg-center px-6 md:px-8 flex-col"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:gap-20 md:flex-row md:justify-between md:items-center">
        <div className="min-w-[200px] max-w-[320px] flex flex-col items-center md:items-start gap-4 md:gap-8">
          <TypeAnimation
            className="md:whitespace-pre-line text-4xl md:text-5xl font-bold md:text-left text-center font-rem"
            sequence={[`Hi, \nI'm Kien👋`, 2000]}
          />
          <p className="text-slate-600 font-semibold md:text-left text-center text-lg">
            A passionate{" "}
            <strong className="text-black">React Developer </strong>
            living and working in Hanoi, Vietnam.
          </p>
          <div className="flex gap-5">
            {HELLO_LINK_ITEMS.map(({ title, href, className, target }) => (
              <NavItem
                key={href}
                href={href}
                title={title}
                className={className}
                target={target}
              />
            ))}
          </div>
        </div>
        <div className="border-2 border-primary-black rounded-[50px] aspect-square max-w-[250px] md:max-w-[300px] lg:max-w-[350px] p-[2px] xl:w-full">
          <img
            src={profile}
            alt="Profile picture"
            className="rounded-[46px] w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hello;
