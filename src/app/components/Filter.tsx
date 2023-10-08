import React, { type Dispatch } from "react";

export default function Filter({
  filter,
  setFilter,
}: {
  filter: "year" | "half_year" | "month";
  setFilter: Dispatch<"year" | "half_year" | "month">;
}) {
  return (
    <select
      className="bg-white py-2 px-4 rounded-[15px] border-[1px] border-[#000aff] self-end w-[250px]"
      onChange={(e) => {
        console.log("target", e.target.value);
        setFilter(e.target.value);
      }}
    >
      <option value="month" selected>
        За последний месяц
      </option>
      <option value="half_year">За пол года</option>
      <option value="year">За год</option>
    </select>
  );
}
