import { FC } from "react";
import Badge from "./Badge";
import { type AdvertisementStats } from "@src/types";

import Plate from "../Plate";
import AdRenderer from "@components/AdRenderer";

const Card: FC<AdvertisementStats> = (props) => {
  const { impressions, clicks, ctr, type } = props;

  return (
    <div
      role="gridcell"
      tabIndex={0}
      className={
        "flex flex-col w-full h-full gap-4 relative overflow-hidden rounded-t-lg"
      }
    >
      <Badge>{type}</Badge>
      <div
        id={"card-content"}
        className={"flex flex-col text-start h-44 justify-center"}
      >
        <AdRenderer {...props} />
      </div>
      <div className={"flex flex-row justify-between"}>
        <Plate title={"Impressions"} value={impressions} />
        <Plate title={"Clicks"} value={clicks} />
        <Plate title={"CTR"} value={ctr.toFixed(2)} postfix={"%"} />
      </div>
    </div>
  );
};

export default Card;
