import { FC } from "react";
import { type AdvertisementStats } from "@src/types";
import TextContent from "@components/AdRenderer/TextContent";
import ImageContent from "@components/AdRenderer/ImageContent";
import VideoContent from "@components/AdRenderer/VideoContent";

const AdRenderer: FC<AdvertisementStats> = (props) => {
  const { type } = props;

  return (
    <>
      {type === "text" && (
        <TextContent
          headline={props.headline}
          description={props.description}
        />
      )}
      {type === "image" && <ImageContent url={props.url} />}
      {type === "video" && <VideoContent url={props.url} />}
    </>
  );
};

export default AdRenderer;
