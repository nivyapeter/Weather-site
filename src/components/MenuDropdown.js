import React from "react";
import {HiChevronDown} from "react-icons/hi";

function MenuDropdown() {
  return (
    <div className="md:hidden">
      <div className="border-t-1 border-[#dedede] text-left px-8 py-2">
        <div>Home</div>
      </div>
      <div className="border-t-1 border-[#dedede] text-left">
        <div className="text-[#2b2b2b] ">
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Weather </p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Maps </p>
            {/* <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span> */}
          </div>
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Weather News </p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Health</p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Science </p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
          <div className="border-t-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Environment </p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
          <div className="border-t-2 border-b-2 border-[#dedede] flex items-center justify-between flex-row px-8 py-2">
            <p>Activities </p>
            <span><HiChevronDown  className="ml-4 text-[##1b4de4] w-[18px]"/></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDropdown;
