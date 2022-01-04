import Card from "./ui/Card";
import Project from "./ui/Project";
import { projects } from "./data";

const Projects = () => {
  return (
    <Card title="<Projects />">
      <div className="flex flex-row flex-wrap justify-around md:mt-10">
        {projects.map((project) => (
          <Project
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </Card>
  );
};

export default Projects;
