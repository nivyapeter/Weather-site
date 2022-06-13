import React from "react";
import CenterFooterText from "./CenterFooterText";
import SideLogo from "./SideLogo";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <>
      <div className="bg-white md:mt-8 ">
        <div className="xl:max-w-[71rem] md:max-w-[40rem] lg:max-w-[53rem] 2xl:max-w-[79rem] m-auto">
        <div className="flex flex-row items-center md:justify-between justify-center mt-4">
         <SocialMediaIcons />
         <SideLogo />
         </div>
          <div className="md:mt-8">
           <CenterFooterText />
          </div>
        </div>
      </div>
    </>
  );
}