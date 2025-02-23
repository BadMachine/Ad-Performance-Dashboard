import { DashboardProvider } from "./context/provider/DashboardProvider.tsx";

import Filter from "@components/Filter";
import Header from "@components/Header";
import Summary from "@components/Summary";
import Grid from "@components/Grid";

function App() {
  return (
    <DashboardProvider>
      <div className={"flex flex-col gap-10 px-6 pt-4"}>
        <Header>
          <Filter />
        </Header>
        <Summary />
        <Grid />
      </div>
    </DashboardProvider>
  );
}

export default App;
