import { FC } from "react";

interface PlateProps {
  title: string;
  value: number | string;
  postfix?: string;
}

const Plate: FC<PlateProps> = ({ title, value, postfix }) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <span className={"text-gray-500 dark:text-gray-400 text-plate-title"}>
        {title}
      </span>
      <span className={"font-bold text-plate-value"}>
        {value}
        {postfix}
      </span>
    </div>
  );
};

export default Plate;
