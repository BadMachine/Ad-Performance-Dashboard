import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AdvertisementStats } from "@src/types";
import { useFetchStatistics } from "@hooks/useAds";
import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { fetchStatistics } from "@api/fetchAds";

describe("Retrieving ads statistics", () => {
  let mockData: AdvertisementStats[] = [];

  beforeEach(() => {
    mockData = [
      {
        id: 1,
        url: "https://localhost:3001/api",
        type: "image",
        impressions: 5,
        ctr: 10,
        clicks: 4,
      },
      {
        id: 2,
        type: "text",
        headline: "Test headline",
        description: "Test description",
        impressions: 5,
        ctr: 10,
        clicks: 4,
      },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it("Tests fetchStatistics function", async () => {
    const data = await fetchStatistics();

    expect(fetch).toHaveBeenCalledWith(import.meta.env.VITE_BE_URL);
    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should return mocked data from useFetchStatistics hook", async () => {
    const { result } = renderHook(() => useFetchStatistics());

    await waitFor(() => {
      expect(result.current).toBe(mockData);
    });
  });
});
