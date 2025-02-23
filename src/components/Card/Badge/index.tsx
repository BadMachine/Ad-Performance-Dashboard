import { FC, PropsWithChildren } from "react";

const Badge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "px-2 capitalize rounded-xl absolute top-2 left-2 bg-amber-50 text-black w-16 text-center text-ellipsis overflow-hidden"
      }
    >
      {children}
    </div>
  );
};

export default Badge;
