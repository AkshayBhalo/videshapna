import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Img2 from "../../Images/FAQs-cuate.png"

export default function Faq() {
  return (
    <div className=" faq-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight  text-gray-600 sm:text-6xl mb-5">FAQ's</h2>
        </div>
        <div className="col-lg-6 align-self-center">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I use the VideshApna platform?</Accordion.Header>
              <Accordion.Body>
              To use our platform, you typically need to create an account or sign up. Once registered, you can browse the platform for information, access tools and resources, and, in some cases, initiate visa applications or consultations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is the VideshApna platform safe for my personal information?</Accordion.Header>
              <Accordion.Body>
              Our platform prioritises data security and privacy. We ensure that you use our platform, which has strong encryption and adheres to data protection regulations. Please see our privacy policy for more information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What happens if my immigration application is denied? </Accordion.Header>
              <Accordion.Body>
              If your application is denied, our platform may offer assistance with reapplying, appealing the decision, or exploring alternative immigration options.

              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can the VideshApna platform help me with my visa application?</Accordion.Header>
              <Accordion.Body>
              To make the visa application process easier, our platform frequently provides step-by-step lessons, document checklists, and automatic form filling.
              <br/>
You can also seek expert guidance from immigration lawyers or consultants to help you achieve your relocation goals.

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How do I know which visa or immigration program is right for me?</Accordion.Header>
              <Accordion.Body>
              Our platform offers assessment tools or quizzes to help users determine the most suitable visa or immigration program based on their qualifications, goals, and circumstances.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
              <Accordion.Header>Which are the top immigration countries in the world?
</Accordion.Header>
              <Accordion.Body>
              The top countries in the world in terms of their desirability for immigrants around the world are:
              <ul className="mt-2">
                <li>- USA</li>
<li>- UK</li>
<li>- Canada</li>
<li>- Australia</li>
<li>- Singapore
                </li>
              </ul>
              <p className="mt-2">
              These countries are as popular for permanent immigration as they are for studying, working, travelling, or even starting a business.

              </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header> Which is the easiest country to get a visa from?
</Accordion.Header>
              <Accordion.Body>
              Canada, Germany, the USA, Australia, and the UK are the countries that provide visas for Indians easily. Along with that, these countries have a huge Indian citizen population. If you are planning to migrate abroad, let our experts guide you through the best options.

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Which documents are required for a visa?
</Accordion.Header>
              <Accordion.Body>
               <ul>
                <li>               A valid passport
</li>
                <li>
                Passport-size photographs

                </li>
                <li>
                Financial proofs like bank statements, payslips, etc.

                </li>
                <li>
                Fully completed visa application

                </li>
                <li>
                Employement contract if necessary

                </li>
                <li>
                Academic transcripts

                </li>
                <li>
                Language proficiency score cards - IELTS

                </li>

               </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>What should I do if I encounter problems with the VideshApna platform?
</Accordion.Header>
              <Accordion.Body>
              Contact the platform's customer support for assistance. If you suspect fraudulent activity, report it to the appropriate authorities. Always keep a record of your interactions and transactions with the platform.

              </Accordion.Body>
            </Accordion.Item>
          
          
          </Accordion>
        </div>
        <div className="col-lg-5 mx-auto align-self-center">
          <img  className="img-fluid" src={Img2} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}
