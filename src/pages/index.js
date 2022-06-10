import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import NavBar from "../components/NavBar";

function index() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default index;
