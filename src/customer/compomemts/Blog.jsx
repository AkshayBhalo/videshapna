import { Link } from "react-router-dom";

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
  // More posts...
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-30 relative">
      <div className="pattern-layer">
        <div className="pattern-22"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mx-auto max-w-3xl text-center lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight  text-gray-600 sm:text-6xl">
                Latest Blogs
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="row mx-auto mt-10 ">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="col-lg-4 mb-4 flex max-w-xl flex-col items-start justify-between "
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
                            <Link to={post.author.to} className="text-md">
                              <span className="absolute inset-0 text-md" />
                              {post.author.name}
                            </Link>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-12 text-center mt-5 pt-3">
            <Link
              to="/blog"
              className="rounded-md bg-sky-400 px-4 py-4 text-lg font-semibold text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              More Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
