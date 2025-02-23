import { useAdsStatistics } from "@hooks/useAds";
import Card from "../Card";

const Grid = () => {
  const statistics = useAdsStatistics();

  return (
    <div
      aria-label={"Ad list"}
      role="grid"
      className={
        "grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
      }
    >
      {statistics?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Grid;
