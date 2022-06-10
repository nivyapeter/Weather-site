import React from "react";
import { VscSearch } from "react-icons/vsc";

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
    </div>
  );
}
export default SearchBar;
