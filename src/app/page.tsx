import { type ApiData } from "@/pages/api/data";

import Graph from "./components/Graph";
import { extractGraphData } from "./utils";
export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/data", { cache: "no-store" });
  const data: ApiData = await response.json();
  const graphData = data.finance.periods.map(extractGraphData);

  return (
    <main className=" min-h-screen p-24">
      <Graph data={graphData[0]} />
    </main>
  );
}
