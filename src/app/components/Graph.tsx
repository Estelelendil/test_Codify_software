"use client";
import React, { useState } from "react";
import { Bar, BarChart, XAxis, type XAxisProps, YAxis, type YAxisProps } from "recharts";

import { type RechartsGraphData } from "../utils";

import Filter from "./Filter";

const xyProps: XAxisProps & YAxisProps = {
  tickSize: 0,
  tick: { fill: "#000000", fontSize: 12 },
};

export default function Graph({ data }: { data: RechartsGraphData }) {
  const [filter, setFilter] = useState<"year" | "half_year" | "month">("month");
  const graphProps = {
    fill: "#000aff",

    barSize: filter === "half_year" ? 40 : filter === "year" ? 30 : 15,
  };

  return (
    <div className="w-[1000px] flex flex-col items-center gap-4">
      <Filter filter={filter} setFilter={setFilter} />
      <div className="bg-[#fff2fe] rounded-[30px] w-[1000px] p-4">
        <BarChart data={data[filter]} height={300} width={900} margin={{ top: 10 }}>
          <XAxis
            // padding={{ bottom: 15 }}
            axisLine={false}
            dataKey="label"
            stroke="#000aff"
            // strokeDasharray="12 10"
            // range={[10, 10]}
            // interval="equidistantPreserveStart"
            // tickCount={10}
            // tickSize={30}
            {...xyProps}
            interval={filter === "month" ? 4 : 0}
            // type="number"
            // domain={[0, "auto"]}
            // tickCount={5} //
            // minTickGap={100}
            // width={15}
          />
          <YAxis {...xyProps} axisLine={false} />
          <Bar isAnimationActive={false} dataKey="data" radius={3} {...graphProps} minPointSize={2} />
        </BarChart>
      </div>
    </div>
  );
}
