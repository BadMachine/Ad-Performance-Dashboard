import { FC } from "react";
import { type VideoAdvertisementStats } from "@src/types";

const VideoContent: FC<Pick<VideoAdvertisementStats, "url">> = ({ url }) => {
  return (
    <video controls className={"object-cover h-full w-full"}>
      <source src={url} />
    </video>
  );
};

export default VideoContent;
