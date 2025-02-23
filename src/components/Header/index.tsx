import { FC, PropsWithChildren } from "react";

interface HeaderProps {
  title?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({
  title = "Ad Performance Dashboard",
  children,
}) => {
  return (
    <div className={"w-full justify-between flex flex-row items-center"}>
      <h1 className={"text-start text-lg md:text-3xl"}>{title}</h1>
      {children}
    </div>
  );
};

export default Header;
