import classNames from "classnames";
import Label from "./Label";

type Props = {
  children: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  name: string;
  label?: string;
};
function Select({ children, className, disabled, name, label }: Props) {
  return (
    <select
      id={name}
      className={classNames(
        "p-1 border border-[#E1E1E1]",
        { "bg-[#EDEDED]": disabled, "bg-[#fcfcfc]": !disabled },
        className
      )}
    >
      {children}
    </select>
  );
}

type OptionProps = {
  children: React.ReactNode | string;
  className?: string;
  selected?: boolean;
  value: string | number;
};
Select.Option = ({ children, className, selected, value }: OptionProps) => {
  return (
    <option className={classNames(className)} value={value} selected={selected}>
      {children}
    </option>
  );
};

export default Select;
