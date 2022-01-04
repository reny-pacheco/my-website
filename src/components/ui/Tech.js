const Tech = ({ tech }) => {
  return (
    <div className="group hover:shadow-2xl duration-300 transition-shadow ease-in-out border-l-4  border-indigo-500  w-[10rem] md:w-[15rem] bg-white drop-shadow-lg mb-2 hover:border-fuchsia-700">
      <p className="transition-all duration-400 group-hover:text-xl group-hover:text-fuchsia-700 text-center  py-3 text-lg font-medium">
        {tech}
      </p>
    </div>
  );
};

export default Tech;
