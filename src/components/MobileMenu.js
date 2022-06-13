import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BiDownArrow } from "react-icons/bi";
import Footer from "../components/Footer";
import MenuDropdown from "./MenuDropdown";


function MobileMenu() {
  return (
    <div className="md:hidden overflow-y-scroll overflow-x-hidden bg-white h-screen fixed bottom-0 w-full block">
      <div className="flex items-center justify-between h-[33vh] overflow ">
        <div className="">
          <h2 className="text-black text-2xl font-bold px-3 mt-[54rem]">
            Menu
            <div className="absolute">
            <GiEarthAfricaEurope className="w-[30px] h-[80px] text-base hidden md:block text-sky-700" />
            <div className="border-r-2 px-1 text-white text-[15px]  hidden md:block">
              <span className="px-4">IN</span>
            </div>
            <span className="px-2 text-white hidden md:block">°C</span>
            <div>
              <BiDownArrow className="w-[20px] h-[50px] text-white  hidden md:block" />
            </div>
            </div>
          </h2>
          <section>
           <MenuDropdown />
          </section>
          <div>
          <Footer />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
