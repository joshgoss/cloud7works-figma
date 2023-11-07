type Props = {
  children: React.ReactNode | string;
};

function Header({ children }: Props) {
  return <h1 className="text-[40px] mb-7 font-[700]">{children}</h1>;
}

export default Header;
