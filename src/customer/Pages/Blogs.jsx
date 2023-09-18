import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../compomemts/Navigation/TopBar";
import Navigation from "../compomemts/Navigation/Navigation";
import search from "../../Images/search.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Footer from "../compomemts/Footer";
import ScrollToTop from "../compomemts/ScrollToTop";

const posts = [
  {
    id: 1,
    mainImg: "https://source.unsplash.com/random?place",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    mainImg: "https://source.unsplash.com/random?city",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    mainImg: "https://source.unsplash.com/random?nature",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    mainImg: "https://source.unsplash.com/random?random",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    mainImg: "https://source.unsplash.com/random?2",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    mainImg: "https://source.unsplash.com/random?1",
    title: "Boost your conversion rate",
    to: "/blog-details",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      to: "/blog-details",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blog - Videsh Apna</title>
      </Helmet>
      <TopBar />
      <Navigation />
      <div className="bg-stone-100">
        <div className="relative  px-6 pt-14 pb-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-12 lg:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-sky-500 sm:text-6xl font-p">
                Blogs
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
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="row mx-auto ">
                    {posts.map((post) => (
                      <article
                        key={post.id}
                        className="col-lg-6 mb-4 flex max-w-xl flex-col items-start justify-between "
                      >
                        <div className="box-blog  shadow-sm ">
                          <img
                            className="img-fluid bolg-img w-100"
                            src={post.mainImg}
                            alt=""
                          />
                          {/* <div className="d-blog">
                          <img className="img-fluid bolg-img" src={post.mainImg} />
                        </div> */}
                          <div className="inner-blog-blox">
                            <div className="flex items-center gap-x-4 text-xs">
                              <time
                                dateTime={post.datetime}
                                className="text-gray-500 text-sm"
                              >
                                {post.date}
                              </time>
                              <Link
                                to={post.category.to}
                                className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {post.category.title}
                              </Link>
                            </div>
                            <div className="group relative">
                              <h3 className="mt-2  text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                <Link to={post.to}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </Link>
                              </h3>
                              <p className="mt-2 line-clamp-3 text-md leading-6 text-gray-600">
                                {post.description}
                              </p>
                            </div>
                            <div className="relative mt-6 flex items-center gap-x-4">
                              <img
                                src={post.author.imageUrl}
                                alt=""
                                className="h-10 w-10 rounded-full bg-gray-50"
                              />
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                  <Link
                                    to={post.author.to}
                                    className="text-md"
                                  >
                                    <span className="absolute inset-0 text-md" />
                                    {post.author.name}
                                  </Link>
                                </p>
                                <p className="text-gray-600">
                                  {post.author.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="row mx-auto">
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                    <div>
                      <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        <a
                          href="/"
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Previous</span>
                          <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                        <a
                          href="/"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center bg-sky-500 px-4 py-3 text-md font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          1
                        </a>
                        <a
                          href="/"
                          className="relative inline-flex items-center px-4 py-3 text-md font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          2
                        </a>
                        <a
                          href="/"
                          className="relative hidden items-center px-4 py-3 text-md font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                          3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-3 text-md font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                          ...
                        </span>
                        <a
                          href="/"
                          className="relative hidden items-center px-4 py-3 text-md font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                          8
                        </a>
                        <a
                          href="/"
                          className="relative inline-flex items-center px-4 py-3 text-md font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          9
                        </a>
                        <a
                          href="/"
                          className="relative inline-flex items-center px-4 py-3 text-md font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          10
                        </a>
                        <a
                          href="/"
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Next</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </nav>
                    </div>
                  </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget search-widget mb-4">
                <div className="widget-title">
                  <h3 className="text-2xl font-p font-semibold text-gray-700">
                    Search
                  </h3>
                </div>
                <div className="search-form">
                  <form>
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Keyword ..."
                        required=""
                      />
                      <button type="submit">
                        <img src={search} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sidebar-widget search-widget mb-4">
                <div className="widget-title">
                  <h3 className="text-2xl font-p font-semibold text-gray-700">
                    Popular Post
                  </h3>
                </div>
                <div className="col-12">
                  <div className="">
                    <ul className="divide-y divide-gray-100">
                      <li className="flex justify-between gap-x-4 py-3 popular-box">
                        <div className="flex min-w-0 gap-x-4 align-self-center">
                          <img
                            className="side-blog-img flex-none bg-gray-50"
                            src="https://source.unsplash.com/random?place"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto align-self-center">
                            <p className="text-lg font-semibold leading-6 text-gray-900">
                              Boost your conversion rate
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Mar 16, 2020
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-4 py-3 popular-box">
                        <div className="flex min-w-0 gap-x-4 align-self-center">
                          <img
                            className="side-blog-img flex-none bg-gray-50"
                            src="https://source.unsplash.com/random?random"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto align-self-center">
                            <p className="text-lg font-semibold leading-6 text-gray-900">
                              Boost your conversion rate
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Mar 16, 2020
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-4 py-3 popular-box">
                        <div className="flex min-w-0 gap-x-4 align-self-center">
                          <img
                            className="side-blog-img flex-none bg-gray-50"
                            src="https://source.unsplash.com/random?5"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto align-self-center">
                            <p className="text-lg font-semibold leading-6 text-gray-900">
                              Boost your conversion rate
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Mar 16, 2020
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-4 py-3 popular-box">
                        <div className="flex min-w-0 gap-x-4 align-self-center">
                          <img
                            className="side-blog-img flex-none bg-gray-50"
                            src="https://source.unsplash.com/random?7"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto align-self-center">
                            <p className="text-lg font-semibold leading-6 text-gray-900">
                              Boost your conversion rate
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Mar 16, 2020
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default Blogs;
