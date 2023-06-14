import React from "react";

const Loader = () => {
  return (
    <div className="flex">
      <div className="relative top-[50%] left-[50%] ">
        {/* <!-- Outer Ring--> */}
        <div
          className="w-12 h-12 rounded-full absolute
  border-2 border-solid border-gray-200"
        ></div>

        {/* <!-- Inner Ring --> */}
        <div
          className="w-12 h-12 rounded-full animate-spin absolute
  border-2 border-solid border-blue-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
