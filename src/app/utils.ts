import { type PeriodData, type PeriodKey } from "@/pages/api/data";

export type RechartsGraphData = Record<PeriodKey, Array<{ data: number | null; label: string }>>;

export function extractGraphData(periodData: PeriodData): RechartsGraphData {
  const result: Partial<RechartsGraphData> = {};
  const graphData = periodData.graph;

  for (const key in graphData) {
    const periodKey = key as PeriodKey;
    const period = graphData[periodKey];

    const newPeriodData = Object.entries(period).map(([key, value]) => ({
      data: value,
      label: key,
    }));

    result[periodKey] = newPeriodData;
  }

  return result as RechartsGraphData;
}
