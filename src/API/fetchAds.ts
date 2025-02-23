/*
	Basically we would want to throw an error and catch it in ErrorBoundary
	but since I cant use external libs / don't have sufficient time
	the function returns empty []
*/
import {type AdvertisementStats, type Maybe} from "@src/types";

const fetchStatistics = async (
  filter?: Maybe<AdvertisementStats["type"]>,
): Promise<AdvertisementStats[]> => {
  try {
    const urlObject = URL.parse(import.meta.env.VITE_BE_URL);
    if (filter) urlObject?.searchParams.set("type", filter);

    const url = urlObject?.href || "";

    const response = await fetch(url);

    return (await response.json()) as AdvertisementStats[];
  } catch (e) {
    console.error(`Error while fetching statistics data: ${JSON.stringify(e)}`);

    return [];
  }
};

export { fetchStatistics };
