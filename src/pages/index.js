import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import MobileFooter from "../components/MobileFooter";
import NavBar from "../components/NavBar";

function index() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainBody />
      <div className="">
      <MobileFooter />
      </div>
    </div>
  );
}

export default index;
