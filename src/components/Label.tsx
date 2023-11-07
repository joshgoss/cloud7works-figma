import classNames from "classnames";

type Props = {
  className?: string;
  htmlFor: string;
  children: React.ReactNode | string;
  style?: object;
};

function Label({ className, children, htmlFor, style }: Props) {
  return (
    <label
      className={classNames(
        className,
        "w-[100px] text-right inline-block uppercase mr-3 align-top leading-[32px]"
      )}
      htmlFor={htmlFor}
      style={style}
    >
      {children}
    </label>
  );
}

export default Label;
