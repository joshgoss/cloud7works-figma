import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode | String;
  checked: boolean;
  label: string;
  name: string;
};

function Checkbox({ className, checked, children, name, label }: Props) {
  return (
    <div className={classNames("mb-2", className)}>
      <div>
        <input className="mr-2" id={name} name={name} type="checkbox" checked />
        <label className="uppercase text-xs" htmlFor={name}>
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default Checkbox;
