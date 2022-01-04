import Card from "./ui/Card";
import Jobs from "./ui/Jobs";
import Tech from "./ui/Tech";
import { techs, jobs } from "./data";

const Experience = () => {
  return (
    <Card title="<Experience />">
      {jobs.map((job, i) => (
        <Jobs
          title={job.title}
          date={job.date}
          company={job.company}
          description={job.description}
        />
      ))}
      <div className="text-center text-2xl font-medium mb-8">Techonologies</div>
      <div className="flex flex-row flex-wrap justify-around">
        {techs.map((tech) => (
          <Tech tech={tech} />
        ))}
      </div>
    </Card>
  );
};

export default Experience;
