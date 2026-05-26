'use client'

import Hero from "../components/landing/hero/Hero";
import Popular from "../components/popular/Popular";
import Collection from "../components/collections/Collections";
import NewArrivals from "../components/newarrivals/NewArrivals";
import OurStory from "../components/ourstory/ourStory";
import Discount from "../components/disccount/Discount";
import Footer from "../components/footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <Popular />
      <Collection />
      <NewArrivals />
      <OurStory />
      <Discount />
      <Footer />
    </>
  );
};

export default Home;
