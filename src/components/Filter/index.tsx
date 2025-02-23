import { ChangeEvent, FC, OptionHTMLAttributes, useCallback } from "react";
import { type AdvertisementStats } from "@src/types";
import { useAdsFilter } from "@hooks/useAdsFilter";

interface FilterProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: AdvertisementStats["type"] | "";
}

const FilterOption: FC<FilterProps> = ({ value, children }) => (
  <option
    className={"text-black dark:text-white dark:bg-black bg-amber-50"}
    value={value}
  >
    {children}
  </option>
);

const Filter = () => {
  const setFilter = useAdsFilter();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value || undefined;

      setFilter(value as AdvertisementStats["type"]);
    },
    [setFilter],
  );

  return (
    <div className={"flex flex-col"}>
      <label htmlFor="filter" hidden id="filter-label">
        Type:
      </label>
      <select
        aria-labelledby="filter-label"
        name="adsFilter"
        aria-label="Filter"
        onChange={handleChange}
      >
        <FilterOption value={""}>All</FilterOption>
        <FilterOption value="text">Text</FilterOption>
        <FilterOption value="image">Image</FilterOption>
        <FilterOption value="video">Video</FilterOption>
      </select>
    </div>
  );
};

export default Filter;
