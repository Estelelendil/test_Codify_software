"use client";
import React from "react";
import { Bar, BarChart, XAxis, type XAxisProps, YAxis, type YAxisProps } from "recharts";

import { type RechartsGraphData } from "../utils";

const xyProps: XAxisProps & YAxisProps = {
  axisLine: false,
  tickSize: 12,
  tickMargin: 5,
  tick: { fill: "#274568", opacity: 0.7, fontSize: 10 },
};
const graphProps = {
  fill: "#274568",
  opacity: "0.7",
  barSize: 40,
};

export default function Graph({ data }: { data: RechartsGraphData }) {
  // TODO вынести настройки высоразмеров в пропс
  return (
    <div>
      <BarChart data={data.year} height={300} width={800} margin={{ top: 10 }}>
        <XAxis dataKey="label" stroke="#274568" {...xyProps} />
        <YAxis {...xyProps} allowDecimals={true} />
        <Bar isAnimationActive={false} dataKey="data" {...graphProps} />
      </BarChart>
    </div>
  );
}
