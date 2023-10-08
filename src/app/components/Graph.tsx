"use client";
import React, { useState } from "react";
import { Bar, BarChart, XAxis, type XAxisProps, YAxis, type YAxisProps } from "recharts";

import { type PeriodKey } from "@/pages/api/data";

import { type RechartsGraphData } from "../utils";

import Filter from "./Filter";

const xyProps: XAxisProps & YAxisProps = {
  tickSize: 0,
  tick: { fill: "#000000", fontSize: 12 },
};

export default function Graph({ data }: { data: RechartsGraphData }) {
  const [filter, setFilter] = useState<PeriodKey>("month");
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
            axisLine={false}
            dataKey="label"
            stroke="#000aff"
            {...xyProps}
            tickFormatter={(value, index) => {
              if (filter !== "month") {
                return value;
              } else if (index === 0 || (index + 1) % 5 === 0) {
                return value;
              } else {
                return "";
              }
            }}
          />
          <YAxis {...xyProps} axisLine={false} />
          <Bar isAnimationActive={false} dataKey="data" radius={2} {...graphProps} minPointSize={2} />
        </BarChart>
      </div>
    </div>
  );
}
