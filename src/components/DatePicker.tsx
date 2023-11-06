import Label from "./Label";

type Props = {
  name: string;
  value: string;
};

function DatePicker({ name, value }: Props) {
  return (
    <input
      id={name}
      type="date"
      className="bg-[#fcfcfc] border border-[#EDEDED] p-1 text-xs"
      name={name}
      value={value}
    />
  );
}

export default DatePicker;
