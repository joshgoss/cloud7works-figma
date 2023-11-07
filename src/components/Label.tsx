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
        "w-[100px] text-right inline-block uppercase mr-3 align-top leading-[32px]",
        className
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
