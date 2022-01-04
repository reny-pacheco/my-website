const Jobs = ({ title, company, date, description, last = false }) => {
  return (
    <div className="fade">
      <div className=" w-full flex justify-between md:mt-8">
        <div className="block">
          <div className="md:text-lg text-base font-medium">{title}</div>
          <div className="md:text-sm text-xs font-normal text-neutral-500 md:text-neutral-600">
            {company}
          </div>
        </div>
        <div className="my-auto md:text-sm text-xs font-normal text-neutral-500 md:text-neutral-600">
          {date}
        </div>
      </div>
      <p className="md:text-base text-sm font-medium text-neutral-600 md:text-neutral-700 mt-6">
        {description}
      </p>
      <div className="mx-auto w-[5rem] md:w-[15rem] md:border-b-4 md:my-10 my-6 border-b-2 border-fuchsia-700"></div>
    </div>
  );
};

export default Jobs;
