import classNames from "classnames";
import Label from "./Label";

type Props = {
  className?: string;
  disabled?: boolean;
  name: string;
  placeholder?: string;
  value: string | number;
};

function Input({ className, disabled, name, placeholder, value }: Props) {
  return (
    <input
      id={name}
      className={classNames(
        "p-1 rounded border border-[#E1E1E1] uppercase",
        {
          "bg-[#FCFCFC]": !disabled,
          "bg-[#EDEDED]": disabled,
        },
        className
      )}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
