import Card from "./ui/Card";
import profileImage from "../images/profile.jpg";

const About = () => {
  return (
    <Card title="<About />">
      <div className=" block md:flex md:flex-row-reverse my-10 ">
        <div className="flex md:basis-1/2 ">
          <div className="p-1.5 m-auto bg-gradient-to-tl from-purple-700 to-rose-400 rounded-full">
            <img
              className=" m-auto w-28 h-30 rounded-full md:h-60 md:w-60"
              src={profileImage}
              alt="image2"
            />
          </div>
        </div>
        <p className="fade text-lg leading-loose tracking-wide md:basis-1/2 text-md md:my-auto md:pr-8 md:text-2xl font-medium text-neutral-600 mt-6">
          Hello, I'm{" "}
          <span className="font-bold text-2xl md:text-5xl text-indigo-700">
            Reny,
          </span>{" "}
          I love developing software specially web applications (frontend and
          backend). With experience developing web applications using Python,
          Javascript, HTML and CSS.
        </p>
      </div>
    </Card>
  );
};

export default About;
