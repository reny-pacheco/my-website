import { ReactComponent as Github } from "../../images/github.svg";

const Project = ({ title, link, description }) => {
  return (
    <div className="fade  flex flex-row flex-wrap justify-around">
      <div className="block pt-4 rounded-lg pb-12 bg-white-500 transition-shadow duration-500 ease-in-out hover:shadow-2xl shadow-lg px-4 mb-6 md:w-[20rem]">
        <div className="flex justify-between">
          <div className="md:text-lg text-base font-medium">{title}</div>
          <a href={link} target="blank">
            <Github className="w-5 text-blue-700 hover:text-purple-700" />
          </a>
        </div>
        <p className="md:text-base  text-sm font-medium text-neutral-600 md:text-neutral-700 md:mt-6 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
