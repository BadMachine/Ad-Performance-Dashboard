import { FC } from "react";
import { type ImageAdvertisementStats } from "@src/types";

const ImageContent: FC<Pick<ImageAdvertisementStats, "url">> = ({ url }) => {
  return (
    <img
      src={url}
      alt="Image content"
      className={"object-cover h-full w-full"}
    />
  );
};

export default ImageContent;
