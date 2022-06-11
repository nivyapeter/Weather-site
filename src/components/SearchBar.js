import React from "react";
import { VscSearch } from "react-icons/vsc";
import { BsCloudSun } from "react-icons/bs";

function SearchBar() {
  return (
    <div class="flex">
      <div class="xl:w-96">
        <div class="input-group relative flex items-center w-full rounded-3xl bg-[#337A9E]">
          <input
            type="search"
            className=" rounded-3xl relative flex-auto focus:outline-2 outline-white text-center min-w-0 block w-full py-[5px] px-3 md:py-1.5 text-base font-normal text-white  bg-[#337A9E]"
            placeholder="Search City or Postcode"
          />
          <div className="text-white  font-bold pr-2 ">
            <VscSearch />
          </div>
        </div>
      </div>
      <div className="md:bg-white rounded-lg lg:group-hover:block hidden absolute w-[26%] mt-1 ">
        <div className="border-b-2 p-3">
          <span>Recents</span>
        </div>
        <div className="flex flex-row items-center cursor-pointer hover:bg-blue-700">
          <BsCloudSun className="text-yellow-600 w-[30px] h-[30px] ml-6" />
          <div className="p-2 ">
            <span>26°</span>
          </div>
          <div className="p-4 flex flex-col items-center text-xs">
            <p>Wayanadu</p>
            <span>Kerala</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
