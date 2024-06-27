import React from "react";
import Cards from "./Cards";

function AreaOfFocus() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-4">
      <div className="text-center">
        <h2 className="font-500 text-5xl text-[#212121]">Our Area of Focus</h2>
        <p className="font-400 text-[17px] text-[#4E4E4E] max-w-[650px] mx-auto mt-6">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
        <Cards />
      </div>
    </div>
  );
}

export default AreaOfFocus;
