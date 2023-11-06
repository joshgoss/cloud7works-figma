import classNames from "classnames";

type Props = {
  className?: string;
  htmlFor: string;
  children: React.ReactNode | string;
};

function Label({ className, children, htmlFor }: Props) {
  return (
    <label
      className={classNames(
        "w-[90px] text-right inline-block text-xs uppercase text-[#606060] mr-3 align-top leading-[26px]",
        className
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
