type Props = {
  name: string;
  value: string;
};

function TextArea({ name, value }: Props) {
  return (
    <textarea className="bg-[#FCFCFC] border border-[#EBEBEB] h-[70px] w-3/4">
      {value}
    </textarea>
  );
}

export default TextArea;
