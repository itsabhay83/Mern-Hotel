import { useState } from "react";
import { toast } from "react-toastify";

const HeroNewsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto my-10">
      <form className="m-6 sm:m-8 md:m-12 lg:m-28 bg-[#038c7f] text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24">
        <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
          Explore More About Our Hotel
        </p>
        <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
          Sign Up for Our Newsletter
        </h6>

        <div className="flex-col justify-center w-full md:flex-row flex pt-6 sm:pt-12">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none"
          />
          <button
            onClick={() => {
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                return toast.error("Please enter a valid email");
              }
              setEmail("");
              toast.success("Signed up for newsletter successfully");
            }}
            type="button"
            className="px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-[#f2c641] rounded-lg md:rounded-2xl shadow-sm shadow-tertiary-light text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroNewsletter;
