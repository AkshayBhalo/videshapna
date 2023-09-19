import { Link } from "react-router-dom";
import Arrow from "../../../Images/arrow.png"

export default function MainCrosel1() {
  
  return (
    <div className="" style={{zIndex:''}}>
      <div className="relative overflow-hidden ">
      <div className="pattern-layer">
        <div
          className="pattern-3"
          style={{
            backgroundImage: "URL(../../../assets/shape-40.png)",
          }}
        ></div>
      </div>
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="md:max-w-[53%]">
            <h1 className="text-3xl  tracking-tight text-zinc-600 sm:text-6xl main-text">
              <span className="relative whitespace-nowrap text-sky-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative one-text">One platform</span>
              </span>{" "}
              meets all your immigration needs
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Get a Visa and relocate to your dream country. <br />Begin your journey right away.
              <br />
            </p>
          </div>
          <div>
            <div className="mt-8">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 z-1">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://source.unsplash.com/random/300×300/?student"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?place"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?abroad"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?study"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?education"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?book"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg">
                        <img
                          src="https://source.unsplash.com/random/300×300/?immigration"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/assessment"
                className="inline-block rounded-md border border-transparent bg-sky-400 px-8 py-3 text-center font-medium text-white hover:bg-sky-600"
              >
                Free Assessment
              </Link>
              <div className="arrow d-lg-block d-none animate__animated animate__backInUp animate__delay-1s">     
              <img className="img-fluid" src={Arrow} alt="" />
              <p className="text-xl text-sky-500 font-semibold">
              Evaluate the possibilities and get detailed feedback from our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
