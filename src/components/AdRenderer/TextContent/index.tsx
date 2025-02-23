import { FC } from "react";
import { type TextAdvertisementStats } from "@src/types";

const TextContent: FC<
  Pick<TextAdvertisementStats, "headline" | "description">
> = ({ headline, description }) => {
  return (
    <div className={"px-2 flex flex-col gap-3"}>
      <span className={"font-bold text-xl"}>{headline}</span>
      <span className={"text-sm text-gray-500 dark:text-gray-400"}>
        {description}
      </span>
    </div>
  );
};

export default TextContent;
