const Editinfo = ({ inputPlaceholder1, inputPlaceholder2 }) => {
  return (
    <div className=" flex flex-col justify-center items-center w-full gap-3 overflow-hidden">
      <div className="w-30p flex flex-col gap-3 overflow-hidden">
        <input type="text" />
        {inputPlaceholder2 ? <input type="text" /> : ""}
      </div>
      <div className="flex w-30p items-start gap-3 overflow-hidden">
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Editinfo;
