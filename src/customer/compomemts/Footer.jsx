import React from "react";
import Facebook from "../../Images/facebook.png";
import Instagram from "../../Images/instagram.png";
import Twitter from "../../Images/twitter.png";
import Youtube from "../../Images/youtube.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";

function Footer() {
  return (
    <div className="footer bg-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img
              className="w-auto mb-4 mt-4 hh-24"
              src={Logo}
              alt=""
            />
            <p className="text-gray-500 mb-4">
              The VideshApna platform streamlines the immigration process,
              making it easier, more efficient, and transparent for users.
            </p>

            <InputGroup className="mb-3 subscribe-form">
              <Form.Control
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Subscribe Now</InputGroup.Text>
            </InputGroup>
            <div className="social-media">
              <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                  <a
                    className="nav-link d-inline-flex bg-transparent border-none"
                    href="/"
                  >
                    <img
                      className="img-fluid"
                      src={Facebook}
                      alt=""
                      aria-label="Facebook"
                    />
                  </a>
                </li>
                <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                  <a
                    className="nav-link d-inline-flex  bg-transparent border-none"
                    href="/"
                  >
                    <img
                      className="img-fluid"
                      src={Instagram}
                      alt=""
                      aria-label="Instagram"
                    />
                  </a>
                </li>
                <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                  <a
                    className="nav-link d-inline-flex  bg-transparent border-none"
                    href="/"
                  >
                    <img
                      className="img-fluid"
                      src={Twitter}
                      alt=""
                      aria-label="Twitter"
                    />
                  </a>
                </li>{" "}
                <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                  <a
                    className="nav-link d-inline-flex  bg-transparent border-none"
                    href="/"
                  >
                    <img
                      className="img-fluid"
                      src={Youtube}
                      alt=""
                      aria-label="Youtube"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h3>Resources</h3>
            <div className="row">
              <div className="col-lg">
              <ul className="links-list clearfix">
              <li className="footer-link">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-link">
                <Link to="/services-overview">Services Overview</Link>
              </li>
              <li className="footer-link">
                <Link to="/platform-overview">Platform Overview</Link>
              </li>
              <li className="footer-link">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="footer-link">
                <a href="/">Career</a>
              </li>{" "}
              <li className="footer-link">
                <Link to="/contact">Contacts</Link>
              </li>
            </ul>
              </div>
              {/* <div className="col-lg">
              <ul className="links-list clearfix">
             
            
            </ul>
              </div> */}
            </div>
           
          </div>
          <div className="col-lg col-md-6">
            <h3>Info</h3>
            <ul className="links-list clearfix">
              <li className="footer-link">
                <Link to="/terms">Website Terms</Link>
              </li>
              <li className="footer-link">
                <Link to="/privacy-policy">Privacy Notice</Link>
              </li>
              <li className="footer-link">
                <Link href="/anti-fraud-policy">Anti Fraud Policy</Link>
              </li>
              <li className="footer-link">
                <Link href="/refund">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg col-md-6 mb-4">
            <h3>Contact us</h3>
            <ul className="links-list clearfix">
              <li className="footer-link">
                <p>
                  Email:{" "}
                  <a href="mailto:info@videshapna.com">info@videshapna.com</a>{" "}
                </p>
              </li>
              <li className="footer-link">
                <p>
                  Address :{" "}
                  <a href="/">204, 205, Titanium One, Pakwan Cross Road ,SG Heighway, Bodakdev, Ahmedabad, Gujarat, 380054</a>{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center border-top">
            <p className="mb-0 mt-5 text-gray-500">
              Copyright By © EXPATNAVIGATORS SOLUTIONS LLP - 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
