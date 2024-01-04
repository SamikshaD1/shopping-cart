import React from "react";
import { LuLoader2 } from "react-icons/lu";

function Loading() {
  return (
    <div className="flex justify-center items-center space-x-1 text-2xl text-white">
      <LuLoader2 size={25} className=" animate-spin" />

      <div>Loading ...</div>
    </div>
  );
}

export default Loading;
