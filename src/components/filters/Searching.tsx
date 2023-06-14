import { AppDispatch } from "@/store/Store";
import { searchingLogic } from "@/store/robo-list";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Searching = () => {
  const[val,setVal]=useState<string>()
  const dispatch=useDispatch<AppDispatch>()

  const handleChange=(e:any)=>{
    dispatch(searchingLogic(e.target.value))
  }
  return (
    <div className="flex gap-3">
      <input
        type="search"
        name="search"
        className="outline-none rounded-md p-2 w-40"
        placeholder="Search by name"
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
};

export default Searching;
