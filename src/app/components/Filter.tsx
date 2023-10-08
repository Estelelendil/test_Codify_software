import React, { type ChangeEventHandler, type Dispatch } from "react";

import { type PeriodKey } from "@/pages/api/data";

const items: Record<PeriodKey, string> = {
  month: "За последний месяц",
  year: "За год",
  half_year: "За пол года",
} as const;

const itemsArr = Object.entries(items);

export default function Filter({
  filter,
  setFilter,
}: {
  filter: "year" | "half_year" | "month";
  setFilter: Dispatch<"year" | "half_year" | "month">;
}) {
  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value as PeriodKey;
    setFilter(value);
  };

  return (
    <select
      className="bg-white py-2 px-4 rounded-[15px] border-[1px] border-[#000aff] self-end w-[250px]"
      onChange={onChange}
    >
      {itemsArr.map(([value, label]) => (
        <option key={value} value={value} selected={filter === value}>
          {label}
        </option>
      ))}
    </select>
  );
}
