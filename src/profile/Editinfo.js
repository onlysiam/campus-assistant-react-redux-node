import { Button, Input } from "../formComponents/FormComponents";
const Editinfo = ({ inputPlaceholder1, inputPlaceholder2 }) => {
  return (
    <div className=" flex flex-col justify-center items-center w-full gap-3 overflow-hidden">
      <div className="w-30p flex flex-col gap-3 overflow-hidden">
        <Input
          dimensions="w-full"
          border="border rounded border-gray-400"
          padding="px-2 py-1"
          placeholder={inputPlaceholder1}
        />
        {inputPlaceholder2 ? (
          <Input
            dimensions="w-full"
            border="border rounded border-gray-400"
            padding="px-2 py-1"
            placeholder={inputPlaceholder2}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex w-30p items-start gap-3 overflow-hidden">
        <Button
          dimensions="w-20 h-8"
          padding="px-0 py-0"
          margin="mr-0"
          font="font-regular"
          body="Change"
        />
        <Button
          dimensions="w-20 h-8"
          padding="px-0 py-0"
          margin="mr-0"
          font="font-regular"
          body="cancel"
        />
      </div>
    </div>
  );
};

export default Editinfo;
