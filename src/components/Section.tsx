import { cn } from "@/utils";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-auto flex justify-center items-center min-h-screen",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
