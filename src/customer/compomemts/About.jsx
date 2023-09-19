// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <>
      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="text-2xl  tracking-tight text-slate-900 sm:text-6xl main-text">
              <span className="relative whitespace-nowrap text-slate-600">
                What is
                {/* <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-20 bottom-10 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                        preserveAspectRatio="none"
                      >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                      </svg> */}
                <span className="relative text-sky-500"> VideshApna?</span>
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              The VIDESHAPNA Platform is a technology-driven online platform
              that guarantees to speed up and simplify the immigration process
              for individuals, families, and businesses looking to relocate and
              settle in other countries.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 offset-lg-1 align-self-center ">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-xl">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Full</span> transparency
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  Live dashboard that provides an overview of the entire process
                  and every step of your application.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Progress
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Steps
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Status updates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 offset-lg-1  align-self-center mt-5 mt-lg-0 text-center">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInRight animate__delay-2s w-[48rem] max-w-none rounded-xl shadow-xl left-20 ring-gray-400/10 sm:w-[62rem] mx-auto"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-5  align-self-center order-lg-last">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-xl">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Guided</span> process
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  Data-driven advice for each stage of your case, and our team
                  of professionals will assist you with the proper evaluation
                  and road map preparation for your application.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Valuable hints
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Guides
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-7 align-self-center mt-5 mt-lg-0 text-center order-lg-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInLeft animate__delay-3s sm:right-20 relative img-fluid w-[48rem] md:w-[100%] max-w-none rounded-xl shadow-xl max-w-none mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-4 offset-lg-1 align-self-center ">
            <div className="lg:pr-6 lg:pt-4 ">
              <div className="lg:max-w-xl">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Tech-enabled</span> decisions
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  No more wasting time for searching or hesitating to find the
                  best immigration lawyer or consultant. A step-by-step system
                  will assist you in quickly analysing and scoring your
                  immigration profile at the top to achieve your goal of
                  relocating to other countries by minimising human error.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Quick solutions
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Accurate assessment
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Save time and money
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 offset-lg-1 align-self-center mt-5 mt-lg-0 text-center">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInRight animate__delay-4s w-[48rem] max-w-none rounded-xl shadow-xl left-20 ring-gray-400/10 sm:w-[62rem] mx-auto"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-5  align-self-center order-lg-last">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-xl">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Quality</span> and confidence
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  Our expert team will help you achieve your goal of relocating
                  to another country by providing smart suggestions, document
                  templates, and other high-quality techniques. We know what
                  works and how to approach each stage of case preparation.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Assistance
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Suggestions
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Quality assurance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-7 align-self-center mt-5 mt-lg-0 text-center order-lg-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInLeft animate__delay-5s sm:right-20 relative img-fluid w-[48rem] md:w-[100%] max-w-none rounded-xl shadow-xl max-w-none mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-4 offset-lg-1 align-self-center ">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-xl">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Peace</span> of mind
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  Live notifications and status updates through chatbot,
                  messenger, and email will keep you up to date on the status of
                  your case.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Live updates
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Chats
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      News
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Staged payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 offset-lg-1 align-self-center mt-5 mt-lg-0 text-center">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInRight animate__delay-5s w-[48rem] max-w-none rounded-xl shadow-xl left-20 ring-gray-400/10 sm:w-[62rem] mx-auto"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-5  align-self-center order-lg-last">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-[100%]">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">100%</span> money back
                  assurance
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  Fill out your immigration visa application with confidence, or
                  get your money back.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Precise evaluation
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Trusted Partners
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Dispute resolution
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Smart contract
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-7 align-self-center mt-5 mt-lg-0 text-center order-lg-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInLeft animate__delay-7s sm:right-20 relative img-fluid w-[48rem] md:w-[100%] max-w-none rounded-xl shadow-xl max-w-none mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative container-fluid isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>

        <div className="row">
          <div className="col-lg-5 offset-lg-1 align-self-center ">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-[100%]">
                {/* <h2 className="text-base font-semibold leading-7 text-sky-500">
                  Lorem ipsum
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                  <span className="text-sky-500">Guaranteed </span>100% customer
                  satisfaction
                </p>
                <p className="mt-3 mb-3 text-lg leading-8 text-gray-600">
                  We promise your complete satisfaction with our services
                  throughout the duration of your application.
                </p>
                <ul className="nav navbar ul-line navbar-left d-flex d-inline-flex ">
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      User-friendly interface
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Step-by-step guidance
                    </a>
                  </li>
                  <li className="nav-item d-inline-flex  align-items-center mr-2 mb-2">
                    <a className="nav-link d-inline-flex" href="/">
                      Money-back guarantee
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 align-self-center mt-5 mt-lg-0 text-center">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="animate__animated animate__bounceInRight animate__delay-8s w-[48rem] max-w-none rounded-xl shadow-xl left-20 ring-gray-400/10 sm:w-[62rem] mx-auto"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      {/* 
<div className="relative isolate container-fluid overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    
<div className="row">
      
      <div className=" col-lg-6 align-self-center mt-5 mt-lg-0 text-center">
       
      <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl left-20 left-gray-400/10 md:-mr-4 lg:-mr-0"/>

      </div>
      <div className="col-lg-4 offset-lg-1 align-self-center ">
      <div className="lg:pr-8 lg:pt-4 ">
            <div className="lg:max-w-xl">
              <h2 className="text-base font-semibold leading-7 text-sky-500">Lorem ipsum</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl">Full transparency</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
            
            </div>
          </div>
      </div> 
    </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
    </div> */}
    </>
  );
}
