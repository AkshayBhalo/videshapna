import Navigation from "../compomemts/Navigation/Navigation";
import TopBar from "../compomemts/Navigation/TopBar";
import Footer from "../compomemts/Footer";
import ScrollToTop from "../compomemts/ScrollToTop";
import { Helmet } from "react-helmet";

export default function Refund() {
  return (
    <>
    <Helmet>
        <title>Refund Policy - Videsh Apna</title>
    </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-sky-500 sm:text-6xl font-p">
              Refund Policy               
              </h1>
             
            </div>
          </div>
        </div>
      </div>

      <section className="main-section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
            </div>
            <div className="col-lg-12">
            <p className="text-lg text-gray-500  mb-3">The refund policy is based on the product/services that you buy from <strong>“EXPATNAVIGATORS SOLUTIONS LLP”</strong> and will be executed based on the terms of the contract you signed with <strong>EXPATNAVIGATORS SOLUTIONS LLP.</strong> All requests will be entertained based on the terms of the contract only.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />

    </>
  );
}
