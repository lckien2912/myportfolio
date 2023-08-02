import { Footer, Section, SectionHeading, ContactForm } from "@/components";
import contactIcon from "@/assets/chat_message_communication_contact_conversation_chatting_icon_230478.png";
import waves from "@/assets/waves.svg";

const Contact = () => {
  return (
    <Section id="contact" className=" flex flex-col relative bg-[#f9f9f9] pb-0">
      <div className="absolute w-screen bottom-0 -z-1 h-2/3 min-h-1/2 mb">
        <img
          src={waves}
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="relative flex-1 flex flex-col justify-center items-center gap-8 z-1 max-w-2xl w-full mb-10">
        <SectionHeading
          title="Contact"
          subtitle="Feel free to Contact me by submitting the form and I will get back to you as soon as I can"
          iconSrc={contactIcon}
          className="md:justify-center w-full"
        />
        <ContactForm />
      </div>
      <Footer />
    </Section>
  );
};

export default Contact;
