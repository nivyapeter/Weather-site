import React from "react";
import { navItems } from "../constants";

function NavBar() {
  console.log(navItems);
  return (
    <div className="bg-[#003550] hidden md:block">
      <div className="max-w-6xl 2xl:max-w-[88rem] m-auto  flex flex-row justify-between text-white items-center ">
        {navItems?.map((navitem) => {
          return (
            <div
              className={`flex items-center p-2 flex-row border-[#003550] border-b-2 hover:border-white ${
                navitem.reverse && "flex-row-reverse"
              }`}
            >
              <span className="text-white">{navitem.icon}</span>
              <span className="px-2">{navitem.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
