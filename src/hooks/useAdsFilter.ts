import { use } from "react";
import { DashboardContext } from "@src/context";

const useAdsFilter = () => {
  const context = use(DashboardContext);

  if (!context) {
    throw new Error("Context is not available");
  }

  return context.setFilter;
};

export { useAdsFilter };
