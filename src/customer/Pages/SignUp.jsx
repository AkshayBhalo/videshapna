import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Logo from "../../Images/logo.svg"

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Sign up - Videsh Apna</title>
      </Helmet>
      <div className="relative isolate flex min-h-full container flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-100vh">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="box-log sm:mx-auto shadow-md col-lg-8 bg-sky-50">
          <div className="">
            <img
              className="mx-auto h-10 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>

          <div className="mt-8">
            <form className="space-y-6 row" action="#" method="POST">
              <div className="col-lg-6 mt-0 mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    required
                    className="form-control  custom-form-control block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-lg-6  mt-0 mb-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="text"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="current-password"
                    required
                    className="form-control custom-form-control block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-lg-6  mt-0 mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="text"
                    type="email"
                    autoComplete="text"
                    required
                    className="form-control  custom-form-control block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-lg-6  mt-0 mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2">
                  <input
                    id="nuber"
                    name="nuber"
                    type="nuber"
                    autoComplete="nuber"
                    required
                    className="form-control  custom-form-control block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-lg-12 mt-0 mb-4">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                    <select className="form-control custom-form-control">
                      <option>Customer</option>
                      <option>Consultant/Lawyer/Agent </option>
                    </select>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-3 text-md font-semibold leading-6 text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-md text-gray-500">
              Back to{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
