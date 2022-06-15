import React from "react";
import { VscSearch } from "react-icons/vsc";
import { BsCloudSun } from "react-icons/bs";
import { useState } from "react";
import SearchData from "./SearchData";

function SearchBar() {
  const [data, setData] = useState(false);
  const showData = () => {
    setData(true);
  };
  return (
    <div class="flex">
      <div class="xl:w-96 md:w-44 ">
        <div class="flex md:pb-1 rounded-3xl bg-[#337A9E] dataBlock items-center border-2 border-transparent focus-within:border-2 focus-within:border-white">
          <div className="w-11/12">
            <input
              type="search"
              className=" rounded-3xl placeholder-white bg-[#337A9E]  focus:outline-none font-medium relative flex-auto text-center min-w-0 block w-full py-[2px] px-3 md:py-1.5 text-base text-white  "
              placeholder="Search City or Postcode"
              onFocus={showData}
              onBlur={() => setData(false)}
            />
          </div>
          <div className="text-white font-bold pr-2 ">
            <VscSearch className="text-white" />
          </div>
        </div>
        {data === true ? <SearchData /> : null}
      </div>
    </div>
  );
}
export default SearchBar;
