const Infocard = ({ body1, body2, body3, onClick }) => {
  return (
    <div className="flex justify-start items-center w-full overflow-hidden">
      <h1 className="w-37p">{body1}</h1>
      <div className="flex justify-between items-center w-full">
        <h1>{body2}</h1>
        <h1
          onClick={() => onClick()}
          className="hover:bg-secondary hover:text-white rounded px-1 py-1 duration-150 cursor-pointer"
        >
          {body3}
        </h1>
      </div>
    </div>
  );
};

export default Infocard;
