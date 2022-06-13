import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import MobileFooter from "../components/MobileFooter";
import NavBar from "../components/NavBar";
import mobileFooterItems from "../constants";

function index() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainBody />
      <div className="fixed bottom-0 bg-white w-full">
      <MobileFooter mobileFooterItems={mobileFooterItems} />
      </div>
    </div>
  );
}

export default index;
