type Props = {
  name: string;
  value: string;
};

function TextArea({ name, value }: Props) {
  return (
    <textarea className="bg-[#FCFCFC] border border-[#EBEBEB] h-[109px] w-[694px]">
      {value}
    </textarea>
  );
}

export default TextArea;
