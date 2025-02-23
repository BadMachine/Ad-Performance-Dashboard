import { FC } from "react";
import { useAdsSummary } from "@hooks/useAdsSummary";

import Plate from "../Plate";

const Summary: FC = () => {
  const { totalImpressions, totalClicks, averageCTR } = useAdsSummary();

  return (
    <section
      className={"w-full grid grid-cols-2 md:grid-cols-3 gap-4 px-8 text-2xl"}
    >
      <Plate title={"Total Impressions"} value={totalImpressions} />
      <Plate title={"Total Clicks"} value={totalClicks} />
      <Plate title={"Average CTR"} value={averageCTR} postfix={"%"} />
    </section>
  );
};

export default Summary;
