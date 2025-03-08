import { useEffect, useState } from "react";
import BlogData from "../../components/blog/BlogData";
import BlogCard from "../../components/blog/BlogCard";

const Blog = () => {
  const [items] = useState(BlogData);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="mt-6 sm:mt-8 md:mt-12 ">
        <h3 className="my-5 text-center text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
          Blogs
        </h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </section>
      <section className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[85%] m-auto">
          <div className="grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8">
            {items.map((item, index) => (
              <BlogCard key={item.id + index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
