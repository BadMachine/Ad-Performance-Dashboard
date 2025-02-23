import { use, useEffect, useState } from "react";
import { DashboardContext } from "../context";
import {AdvertisementStats, Maybe} from "@src/types";
import { fetchStatistics } from "@api/fetchAds";

const useFetchStatistics = (filter?: Maybe<AdvertisementStats["type"]>) => {
  const [statistics, setStatistics] = useState<AdvertisementStats[]>([]);

  useEffect(() => {
    fetchStatistics(filter).then(setStatistics);
  }, [filter]);

  return statistics;
};

const useAdsStatistics = () => {
  const context = use(DashboardContext);

  if (!context) {
    throw new Error("Context is not available");
  }

  return context.adsStatistics;
};

export { useFetchStatistics, useAdsStatistics };
