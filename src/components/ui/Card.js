const Card = (props) => {
  return (
    <div className="rounded-lg md:mb-8 mx-2 px-4 md:pb-12 pb-12 bg-white-500 shadow-lg m-2 md:m-4 md:px-12 p-6 animate">
      <h3 className="md:mb-2 mb-8 text-center md:text-left font-bold text-2xl text-fuchsia-700">
        {props.title}
      </h3>
      {props.children}
    </div>
  );
};

export default Card;
