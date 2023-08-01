import { Footer, Section, SectionHeading } from "@/components";
import contactIcon from "@/assets/chat_message_communication_contact_conversation_chatting_icon_230478.png";
import waves from "@/assets/waves.svg";

const Contact = () => {
  return (
    <Section id="contact" className=" flex flex-col relative">
      <div className="absolute w-screen bottom-0 -z-1 h-2/3 min-h-1/2">
        <img
          src={waves}
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="relative flex-1 flex justify-center items-center gap- 10 z-1">
        <SectionHeading title="Contact me" iconSrc={contactIcon} />
      </div>
      <Footer />
    </Section>
  );
};

export default Contact;
