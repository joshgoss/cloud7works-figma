import classNames from "classnames";

type Props = {
  className?: string;
  href: string;
  children: React.ReactNode | string;
  title: string;
};

function Link({ className, children, href, title }: Props) {
  return (
    <a
      className={classNames("text-xs text-blue-800 underline ml-8", className)}
      href={href}
      title={title}
    >
      {children}
    </a>
  );
}

export default Link;
