import React from "react";
import TopBar from "../compomemts/Navigation/TopBar";
import Navigation from "../compomemts/Navigation/Navigation";
import Hub from "../compomemts/Hub";
import { Helmet } from "react-helmet";
import Cta from "../compomemts/Cta";
import { Testimonials } from "../compomemts/Testimonials";
import Relocated2 from "../compomemts/Relocated2";
import Footer from "../compomemts/Footer";

function InformationHub() {
  return (
    <>
    <Helmet>
        <title>Information Hub - Videsh Apna </title>
    </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-[80%] py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl font-p">
              Reduce effort and save money<br></br> with <span className="text-sky-400">Videsh Apna</span>

              </h1>
            </div>
          </div>
        </div>
      </div>
      <Hub />
      <Relocated2 />

      <Testimonials />

      <Cta />
      <Footer />


    </>
  );
}

export default InformationHub;
