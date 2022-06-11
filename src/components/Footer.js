import React from "react";
import CenterFooterText from "./CenterFooterText";
import SideLogo from "./SideLogo";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <>
      <div className="bg-white mt-8">
        <div className="max-w-[66rem] 2xl:max-w-[83rem] m-auto">
        <div className="flex flex-row items-center justify-between mt-4">
         <SocialMediaIcons />
         <SideLogo />
         </div>
          <div className="mt-8">
           <CenterFooterText />
          </div>
        </div>
      </div>
    </>
  );
}