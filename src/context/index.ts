import { createContext, Dispatch, SetStateAction } from "react";
import {type AdvertisementStats, Maybe} from "@src/types";

export interface SummaryStats {
  totalImpressions: number;
  totalClicks: number;
  averageCTR: number;
}

interface DashboardContextValues {
  adsStatistics: AdvertisementStats[];
  summary: SummaryStats;
  filter?: AdvertisementStats["type"];
  setFilter: Dispatch<SetStateAction<Maybe<AdvertisementStats["type"]>>>;
}
export const DashboardContext = createContext<
  DashboardContextValues | undefined
>(undefined);
