import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Footer from "../components/Footer";
import MenuDropdown from "./MenuDropdown";

function MobileMenu() {
  return (
    <>
      <div className="md:hidden  bg-white h-screen fixed bottom-0 w-full block">
        <div className="flex items-center justify-between h-[33vh] ">
          <div className="">
            <div className="">
              <h2 className="text-black text-2xl font-bold px-8 mt-[47rem] flex flex-row items-center justify-between">
                <p>Menu</p>
                <div className="flex flex-row items-center ">
                <GiEarthAfricaEurope className="w-[30px] h-[80px] text-sm block text-[#1b4de4]" />
                <div className="border-r-2 border-[#1b4de4] px-1 text-[#1b4de4] text-[15px] block">
                  <span className="px-4">IN</span>
                </div>
                <span className="px-2 text-[#1b4de4] text-base block">°C</span>
                </div>
              </h2>
            </div>
            <section>
              <MenuDropdown />
            </section>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
