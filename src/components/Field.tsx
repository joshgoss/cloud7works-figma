import classNames from "classnames";
import Label from "./Label";
import Input from "./Input";
import DatePicker from "./DatePicker";
import Select from "./Select";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

type Props = {
  className?: string;
  children: React.ReactNode | string;
};

function Field({ className, children }: Props) {
  return <div className={classNames("mb-[15px]", className)}>{children}</div>;
}

export default Field;
