import React from "react";
import TopBar from "../compomemts/Navigation/TopBar";
import Navigation from "../compomemts/Navigation/Navigation";
import { Helmet } from "react-helmet";

import Footer from "../compomemts/Footer";
import Hub2 from "../compomemts/Hub2";
import Why2 from "../compomemts/Why2";

function ServicesOverview() {
  return (
    <>
    <Helmet>
        <title>Services Overview - Videsh Apna </title>
    </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-[80%] py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl font-p">
              Reinventing Services to Level-Up Your <span className="text-sky-400">Immigration Program</span>
              </h1>
              <p>
              Our approach to service is high-touch and personally-oriented, emphasizing process transparency and clear communication to relieve applicant anxiety and assure that nothing falls through the cracks.
</p><p>
Operating as a proactive and seamless extension of your own team, we streamline and manage your immigration processes at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hub2 />


      <Why2 />
      <Footer />


    </>
  );
}

export default ServicesOverview;
