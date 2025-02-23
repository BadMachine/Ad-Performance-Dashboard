import { FC, PropsWithChildren, useEffect, useState } from "react";
import { DashboardContext, SummaryStats } from "@src/context";
import { useFetchStatistics } from "@hooks/useAds";

import { computeSummaries } from "@hooks/useAdsSummary";
import { type AdvertisementStats } from "@src/types";
import { Maybe } from "@src/types";

type DashboardProviderProps = PropsWithChildren;

const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [filter, setFilter] =
    useState<Maybe<AdvertisementStats["type"]>>(undefined);
  const [summary, setSummary] = useState<SummaryStats>({
    totalImpressions: 0,
    totalClicks: 0,
    averageCTR: 0,
  });
  const adsStatistics = useFetchStatistics(filter);

  useEffect(() => {
    if (adsStatistics) {
      setSummary(computeSummaries(adsStatistics));
    }
  }, [adsStatistics]);

  return (
    <DashboardContext.Provider
      value={{
        summary,
        filter,
        setFilter,
        adsStatistics,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider };
