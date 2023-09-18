import Navigation from "../compomemts/Navigation/Navigation";
import TopBar from "../compomemts/Navigation/TopBar";
import Im1 from "../../Images/meeting-point.png";
import Im2 from "../../Images/operator.png";
import Im3 from "../../Images/email.png";
import Im4 from "../../Images/hourglass.png";
import Footer from "../compomemts/Footer";
import ScrollToTop from "../compomemts/ScrollToTop";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact - Videsh Apna</title>
    </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-sky-500 sm:text-6xl font-p">
                Contact Us
              </h1>
              <p className="mt-0 text-lg leading-8 text-zinc-600 font-p">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam 
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <span className="sub-title text-sky-900 font-p">
                QUICK CONTACT
              </span>
              <h2 className="main-h2 text-sky-500 font-p">
                Have Questions?
              </h2>
              <p className="mt-3 text-lg text-gray-500 md:w-[75%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, consectetur ab assumenda vero fuga eveniet tempore,
                distinctio impedit harum culpa ex totam molestias, a repellat
                laudantium id doloremque maiores nostrum.
              </p>

              <div className="col-12">
                <div className="row mt-5 md:w-[96%]">
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Im1} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-sky-600 font-p">
                        Location
                      </h3>
                      <p className="text-lg  text-slate-400 font-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Im2} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-sky-600 font-p">
                        Contact
                      </h3>
                      <p className="text-lg  text-slate-400 font-p">
                        Phone:<br></br>
                        +1 89-636-48018
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Im3} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-sky-600 font-p">
                        Email
                      </h3>
                      <p className="text-lg text-slate-400 font-p">
                        Phone:<br></br>
                        yourmail@info.com
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="contect-box">
                      <img className="img-fluid mb-3" src={Im4} alt="" />
                      <h3 className="text-2xl mb-2 font-semibold text-sky-600 font-p">
                        Opening Hrs
                      </h3>
                      <p className="text-lg text-slate-400 font-p">
                      Mon - Friday:<br></br>
                        09.00 am to 07.00 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="sub-title text-sky-900 font-p">
                LET’S CONNECT
              </span>
              <h2 className="main-h2 text-sky-500 font-p">Send Your Message</h2>
              <p className="mt-3 text-lg text-gray-500 md:w-[75%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, consectetur ab assumenda vero fuga eveniet tempore,
                distinctio impedit harum culpa ex totam molestias, a repellat
                laudantium id doloremque maiores nostrum.
              </p>
              <div className="col-12 mt-5">
                    <div className="">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <p className="text-lg font-p mb-2">Name</p>
                        <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>   
                    <div className="col-lg-6 mb-4">
                        <p className="text-lg font-p mb-2">Email</p>
                        <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <p className="text-lg font-p mb-2">Phone</p>
                        <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <p className="text-lg font-p mb-2">Subject</p>
                        <input className="form-control custom-form-control2" placeholder="Enter here..." />
                    </div>
                    <div className="col-lg-12 mb-4">
                        <p className="text-lg font-p mb-2">Your Message</p>
                        <textarea rows={7} className="form-control custom-form-control2" placeholder="Enter here..."></textarea>
                    </div>
                    <div className="col-12">
                        <button className="inline-block rounded-md border border-transparent bg-sky-400 px-12 py-3 text-center font-medium text-white hover:bg-sky-600">
                            Submit
                        </button>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />

    </>
  );
}
