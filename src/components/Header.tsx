type Props = {
  children: React.ReactNode | string;
};

function Header({ children }: Props) {
  return <h1 className="text-[30px] mb-7">{children}</h1>;
}

export default Header;
