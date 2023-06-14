import React from "react";
import Sort from "./filters/Sort";
import Searching from "./filters/Searching";

const Navbar = () => {
  return (
    <div className=" w-full h-20 bg-slate-500 flex items-center justify-center px-3">
      <div className="text-3xl flex flex-1 justify-center">
        Infinite-Scroll{" "}
        <span className="ml-2 text-slate-300 font-mono">(Nextjs)</span>
      </div>
      <div className="flex flex-2 justify-end gap-8 ">
        <Sort />
        <Searching />
      </div>
    </div>
  );
};

export default Navbar;
