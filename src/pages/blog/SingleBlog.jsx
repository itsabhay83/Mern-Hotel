import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogData from "../../components/blog/BlogData";
import Error from "../../components/error/Error";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <div className="float-right mt-2 lg:mt-10 max-[400px]:mr-5 mr-8 sm:mr-16 md:mr-20 lg:mr-28">
        <Link
          to="/blog"
          className="px-2 sm:px-4 md:px-6 py-2 md:py-4 my-4 bg-[#31b675] text-white text-xs md:text-sm lg:text-base  hover:bg-white hover:text-[#31b675]"
        >
          <i className="fas fa-long-arrow-alt-left mr-3"></i>Go Back
        </Link>
      </div>

      {item ? (
        <section className="my-12 sm:my-14 md:my-16 lg:my-24 max-w-[95%] sm:max-w-[90%] m-auto">
          <article className="mt-4 grid sm:grid-cols-3">
            <div className="sm:col-span-2 max-w-[95%] m-auto">
              <img src={item.cover} alt="cover" className="w-full" />

              <div className="mt-2 mb-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm mr-2 group-hover:text-white">
                  {item.date}
                </span>
                <label className="rounded-md text-sm text-white bg-[#31b675] px-4 py-1 group-hover:text-[#31b675] group-hover:bg-white">
                  {item.catgeory}
                </label>
              </div>

              <h1 className="text-3xl mt-6 font-semibold capitalize">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm my-4">{item.desc}</p>
              <p className="text-gray-500 text-sm my-4">{item.desc}</p>

              <h2 className="text-2xl mt-8 sm:mt-12 font-semibold capitalize">
                Two column text example
              </h2>

              <div className="grid grid-cols-2 gap-4 max-[300px]:grid-cols-1">
                <p className="text-gray-500 text-sm my-4 max-[300px]:mt-1">
                  {item.para}
                </p>
                <p className="text-gray-500 text-sm my-4 max-[300px]:mt-[-1rem]">
                  {item.para}
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-0 sm:ml-4 md:ml-8 lg:mx-8">
              <h1 className="text-3xl font-semibold">Categories</h1>
              <hr className="border border-dotted border-[#31b675] mr-48" />

              <ul className="mt-4 grid grid-col-1 min-[350px]:grid-cols-2 sm:grid-cols-1">
                {BlogData.map((item, index) => {
                  return (
                    <li
                      key={item.id + index}
                      className="my-3 hover:translate-x-3 transition-all duration-500"
                    >
                      <i className="far fa-play-circle text-[#31b675]"></i>
                      <span className="text-base ml-1 sm:ml-4">
                        {item.catgeory}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </section>
      ) : (
        <Error />
      )}
    </>
  );
};

export default SingleBlog;
