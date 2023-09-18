import React from "react";
import TopBar from "../compomemts/Navigation/TopBar";
import Navigation from "../compomemts/Navigation/Navigation";
import { Helmet } from "react-helmet";

import Footer from "../compomemts/Footer";
import Hub2 from "../compomemts/Hub2";
import Why2 from "../compomemts/Why2";
import { Testimonials } from "../compomemts/Testimonials";
import How from "../compomemts/How";

function PlatformOverview() {
  return (
    <>
    <Helmet>
        <title>Platform - Videsh Apna </title>
    </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-[80%] py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl font-p">
              Your Mission Control for 
<span className="text-sky-400"> Immigration</span>
              </h1>
              <p>
              The Bridge Platform

               </p>
            </div>
          </div>
        </div>
      </div>
      <Hub2 />
    <How />
    <Testimonials />
      <Why2 />
      <Footer />


    </>
  );
}

export default PlatformOverview;
