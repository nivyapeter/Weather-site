import React from "react";
import { VscSearch } from "react-icons/vsc";
import { BsCloudSun } from "react-icons/bs";
import { useState } from "react";

function SearchBar() {
  const [data, setData] = useState(false);
  const showData=()=>{
    setData(true)
  }
  return (
    <div class="flex">
      <div class="xl:w-96 ">
        <div class="flex md:pb-1">
          <input
            type="search"
            className=" rounded-3xl placeholder-white font-medium relative flex-auto focus:outline-2 outline-white text-center min-w-0 block w-full py-[5px] px-3 md:py-1.5 text-base text-white  bg-[#337A9E]"
            placeholder="Search City or Postcode"
          />
          <div className="text-white absolute left-[70%] top-[5%] font-bold pr-2 ">
            <VscSearch className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded-lg hidden focus:block absolute w-96 dataBlock">
          <div className="border-b-2 p-3">
            <span>Recents</span>
          </div>
          <div>You Have No Recent Locations</div>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
