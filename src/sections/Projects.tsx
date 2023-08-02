import { useState } from "react";

import { Section, SectionHeading, ProjectItem, DetailItem } from "@/components";
import { PROJECTS } from "@/constants";
import projectIcon from "@/assets/documentation_folder_document_management_files_file_project_icon_142253.png";

const Projects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Section
      id="projects"
      className="bg-project-pattern bg-cover bg-center flex flex-col gap-4 relative"
    >
      <div className="flex flex-col px-4 sm:px-6 md:px-8 max-w-7xl gap-8 items-center justify-center">
        <SectionHeading
          title="Projects"
          iconSrc={projectIcon}
          subtitle="Here you will find some of the personal and clients projects that I created"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
          {PROJECTS.map(({ imgSrc, name, description, className }, index) => (
            <ProjectItem
              key={name}
              index={index}
              layoutId={name}
              name={name}
              imgSrc={imgSrc}
              className={className}
              description={description}
              onClick={() => setSelectedId(name)}
            />
          ))}

          <DetailItem
            selectedId={selectedId}
            setClose={() => setSelectedId(null)}
          />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
