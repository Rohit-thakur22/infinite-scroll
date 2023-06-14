import { AppDispatch } from "@/store/Store";
import { sorting } from "@/store/robo-list";
import React, { useState } from "react";
import { TbSortDescending2 } from "react-icons/tb";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    dispatch(sorting(e.target.value));
  };
  return (
    <div className="flex gap-3">
      {/* <label htmlFor="sort" className="flex items-center text-xl">
        Sorting <TbSortDescending2 color="#1d4ed8" />
      </label> */}
      <select
        name="sort"
        defaultValue={0}
        className="outline-none p-2 rounded-md bg-slate-100 text-gray-500"
        onChange={(e) => handleChange(e)}
      >
        <option value={0} disabled className="text-black">
          Sort by 
        </option>
        <option value="id-asc">Id--Acending</option>
        <option value="id-dsc">Id--Decending</option>{" "}
        {/* <option value="name-asc">Name--Acending</option>
        <option value="name-dsc">Name--Decending</option> */}
      </select>
    </div>
  );
};

export default Sort;
