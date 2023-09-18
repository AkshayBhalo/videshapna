import { Helmet } from "react-helmet";


export default function Scoring() {
  return (
    <>
    <Helmet>
      <title>scoring - Videsh Apna</title>
    </Helmet>
      <main className="grid min-h-full h-100vh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-sky-500">Thank you for submitting the form!
</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Global Talent success rate is:



 </h1>
 <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"><span className="text-sky-600 ">50-60%</span></h2>
          <p className="mt-6 text-lg leading-7 text-gray-600">You meet most of the visa requirements,<br></br>
but it looks like a few pieces are missing. We are here to help and guide you!
</p>
<p className="mt-3 text-gray-700">
Our team will contact you regarding your case and<br/>
further steps as soon as possible.
</p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
    
            <a href="/" className="rounded-md bg-sky-400 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
