import { use } from "react";

import { DashboardContext, SummaryStats } from "@src/context";
import { type AdvertisementStats } from "@src/types";

const computeSummaries = (statistics: AdvertisementStats[]): SummaryStats => {
  return statistics.reduce(
    (accumulator, item, index) => {
      accumulator.totalImpressions += item.impressions;
      accumulator.totalClicks += item.clicks;

      accumulator.averageCTR += item.ctr;

      if (index === statistics.length - 1) {
        accumulator.averageCTR /= statistics.length;

        accumulator.averageCTR = Math.round(accumulator.averageCTR * 100) / 100;
      }

      return accumulator;
    },
    {
      totalImpressions: 0,
      totalClicks: 0,
      averageCTR: 0,
    } satisfies SummaryStats,
  );
};

const useAdsSummary = () => {
  const context = use(DashboardContext);

  if (!context) {
    throw new Error("Context is not available");
  }

  return context.summary;
};

export { useAdsSummary, computeSummaries };
