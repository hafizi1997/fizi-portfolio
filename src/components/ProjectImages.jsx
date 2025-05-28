import { useState } from "react";
import CardImage from "../ui/CardImage";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const ProjectImages = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const listProject = projects.map((project) => (
    <CardImage
      key={project.id}
      project={project}
      isActive={activeProject === project.id}
      setActiveProject={setActiveProject}
    ></CardImage>
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{listProject}</div>
  );
};

export default ProjectImages;
