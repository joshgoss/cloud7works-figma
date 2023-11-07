import classNames from "classnames";

type Props = {
  children: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  type?: "button";
};

function Button({ children, className, disabled, type }: Props) {
  return (
    <button
      className={classNames(
        "w-[181px] h-[48px] text-sm text-white py-2 px-1 rounded-2xl uppercase font-[600]",
        { "bg-[#B9B9B9]": disabled, "bg-[#2C2C2C]": !disabled },
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
