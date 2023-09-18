// import { CheckIcon } from "@heroicons/react/20/solid";
import im from "../../Images/ai1.png"
 
export default function Relocated2() {
  return (
    <div className="relative">
      <div className="pattern-layer"><div className="pattern-11"></div><div className="pattern-12"></div></div>
      <div className="bg-custome-blue">
    <div className="container">
      <div className="row py-24 sm:py-32">
        <div className="col-12">

        <div className=" px-6 lg:px-8">
              <div className="mx-auto max-w-6xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight  text-gray-600 sm:text-6xl">
                Lorem ipsum dolor sit amet consectetur<span className="text-sky-500"> adipisicing elit.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit quibusdam placeat reiciendis totam dolores in
                  beatae inventore a laudantium ea ipsam
                </p>
              </div>
            </div>
            </div>
          <div className="col-12 mx-auto text-center mt-5">
          <img className="img-fluid text-center mx-auto " style={{position:'relative',zIndex:'11'}} src={im} alt=""/>

          </div>
      </div>
    </div>
    </div>
   
    </div>

  );
}
