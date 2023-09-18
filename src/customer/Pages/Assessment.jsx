import React from "react";

import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import Select from "../compomemts/Select";
import { useNavigate } from 'react-router-dom';


// setup the step content
// const step1Content = <div className=""></div>;
// const step2Content = <h1>Step 2 Content</h1>;
// const step3Content = <h1>Step 3 Content</h1>;
// const step4Content = <h1>Step 3 Content</h1>;

// function step2Validator() {
//   // return a boolean
// }

// function step3Validator() {
//   // return a boolean
// }



export default function Assessment() {
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    // You can perform any form processing logic here

    // Redirect to another page
    navigate('/scoring');
  };

  return (
    <>
      <Helmet>
        <title>Contact - Videsh Apna</title>
      </Helmet>

      <StepProgressBar
        startingStep={0}
        wrapperClass="wrapperClass"
        buttonWrapperClass="buttonWrapperClass"
        contentClass="contentClass "
        stepClass="stepClass"
        progressClass="progressClass"
        // progressClass="progressClass"
        onSubmit={onFormSubmit}
        steps={[
          {
            // label: "Step 1",
            // subtitle: "10%",
            // name: "step 1",
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">1.&nbsp;</span>
                        What is your main IT skill?
                      </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">
                            I'm in the TECHNICAL development of IT product
                          </label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">
                            I'm in the BUSINESS development of IT product
                          </label>
                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            // label: "Step 2",
            // subtitle: "50%",
            // name: "step 2",
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">2.&nbsp;</span>
                        What is your professional area?{" "}
                      </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">CEO/Founder/Co-founder</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">
                            CTO, CDO or VP of engineering
                          </label>
                          <input
                            required
                            value="newcomer1"
                            type="radio"
                            name="status"
                            id="newcomer1"
                          />
                          <label htmlFor="newcomer1">
                            Artificial Intelligence, Machine learning, NLP (Data
                            science)
                          </label>

                          <input
                            required
                            value="newcomer2"
                            type="radio"
                            name="status"
                            id="newcomer2"
                          />
                          <label htmlFor="newcomer2">
                            Data scientists/data engineers/data analytics
                          </label>
                          <input
                            required
                            value="newcomer33"
                            type="radio"
                            name="status"
                            id="newcomer33"
                          />
                          <label htmlFor="newcomer33">Hardware engineer</label>
                          <label htmlFor="newcomer32">
                            Software engineer/developer/SRE/Front-end
                          </label>

                          <input
                            required
                            value="newcomer32"
                            type="radio"
                            name="status"
                            id="newcomer32"
                          />

                          <input
                            required
                            value="newcomer31"
                            type="radio"
                            name="status"
                            id="newcomer31"
                          />
                          <label htmlFor="newcomer31">
                            Virtual and augmented reality developers
                          </label>
                          <input
                            required
                            value="newcomer41"
                            type="radio"
                            name="status"
                            id="newcomer41"
                          />
                          <label htmlFor="newcomer41">Other</label>
                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
            //validator: step2Validator
          },
          {
            // label: "Step 3",
            // subtitle: "100%",
            // name: "step 3",
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">3.&nbsp;</span>
                        What product led companies have you worked for in the
                        last 5 years (for more than 6 months)?
                      </li>
                      <li className="mt-3">
                        <Select />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
            // validator: step3Validator
          },
          {
            // label: "Step 3",
            // subtitle: "100%",
            // name: "step 3",
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">4.&nbsp;</span>
                        Have you had any experience in the following areas:
                        <span className="font-bold">
                          {" "}
                          outsource/consulting/agency/integrator/freelance{" "}
                        </span>
                        in the last 5 years?This question is required.
                        <div className="text-xl text-gray-400 mt-3">
                          Note: an extensive experience in outsource/consulting
                          decreases the chances of getting the visa
                        </div>
                      </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">0-1 years</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">2-3 years</label>

                          <input
                            required
                            value="newcomer11"
                            type="radio"
                            name="status"
                            id="newcomer11"
                          />
                          <label htmlFor="newcomer11">Over 3 years</label>
                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
            // validator: step3Validator
          },
          {
            // label: "Step 3",
            // subtitle: "100%",
            // name: "step 3",
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">5.&nbsp;</span>
                        What’s the level of your highest position as an employee?
                        
                      </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">Junior</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">Middle</label>

                          <input
                            required
                            value="newcomer11"
                            type="radio"
                            name="status"
                            id="newcomer11"
                          />
                          <label htmlFor="newcomer11">Senior and higher</label>
                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          
            // validator: step3Validator
          },
          {
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">6.&nbsp;</span>
                        Do/did you lead or participate in any non-profit organisation/social enterprise/educational activity/event organisation in the digital technology sector? 
                      </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">Yes</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">No</label>

                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          
          },{
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">7.&nbsp;</span>
                        Did you win/was at the top in any country-wide/international hackathons, olympiads or any other IT contests?                      
                        </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">Yes</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">No</label>

                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
         
          },{
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">8.&nbsp;</span>
                        Do you have any patents?                        
                        </li>
                      <li>
                        <RadioInputWrapper>
                          <input
                            required
                            value="alumni"
                            type="radio"
                            name="status"
                            id="alumni"
                          />
                          <label htmlFor="alumni">Yes</label>
                          <input
                            required
                            value="newcomer"
                            type="radio"
                            name="status"
                            id="newcomer"
                          />
                          <label htmlFor="newcomer">No</label>

                        </RadioInputWrapper>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
            
          },
          {
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">9.&nbsp;</span>
                        Your Name and Surname                        </li>
                      <li className="mt-3">
                        <input placeholder="Type your answer here..." className="form-control assessment-form"></input>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            content: (
              <div className="contentClass1">
                <div className="row h-100">
                  <div className="col-lg-5 mx-auto align-self-center">
                    <ul>
                      <li className="qa">
                        <span className="text-sky-500 font-bold">10.&nbsp;</span>
                        Your E-mail                      </li>
                      <li className="mt-3">
                        <input placeholder="Type your answer here..." className="form-control assessment-form"></input>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          }
        ]}
      />
    </>
  );
}

const RadioInputWrapper = styled.div`
  font-size: 1.0625rem;
  font-family: sans-serif;
  margin-top: 20px;
  label {
    display: inline-block;
    background-color: rgba(36, 155, 235, 0.1);
    box-shadow: rgba(36, 155, 235, 0.8) 0px 0px 0px 2px inset;
    color: rgb(36, 155, 235);
    max-width: 100%;
    height: inherit;
    min-height: 40px;
    outline: 0px;
    padding-block: 4px;
    transition-duration: 0.1s;
    transition-property: background-color, color, border-color, opacity,
      box-shadow;
    transition-timing-function: ease-out;
    width: auto;
    word-break: break-word;
    animation: 0.25s ease 0s 2 normal none running jBPXGM;
    padding: 10px;
    border-radius: 25px;
    padding-left: 20px !important;
    padding-right: 25px !important;
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  label:hover {
    background-color: rgba(36, 155, 235, 0.3);
    color: rgb(36, 155, 235);
  }
  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  input:checked + label {
    background: rgb(36, 155, 235);
    color: #fff;
  }
`;
