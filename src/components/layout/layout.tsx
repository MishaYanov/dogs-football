import React from "react";
import { Nav } from "../01-nav/nav";
import { Hero } from "../02-hero/Hero";
import About from "../03-team-info/About";
import Gallery from "../04-gallery/Gallery";
import Schedule from "../05-schedule/Schedule";
import Footer from "../06-footer/Footer";

function Layout() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <div className="website-wrapper">
      <About></About>
      <Gallery></Gallery>
      <Schedule></Schedule>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Layout;
