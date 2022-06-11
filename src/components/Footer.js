import React from "react";
import CenterFooterText from "./CenterFooterText";
import SideLogo from "./SideLogo";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-5xl m-auto">
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