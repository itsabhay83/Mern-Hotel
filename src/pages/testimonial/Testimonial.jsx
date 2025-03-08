import { useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonial } from "../../components/data";

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-[640px]:mx-2 sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] m-auto py-6 my-6">
      <section>
        <h3 className="my-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase">
          Testimonials
        </h3>
        <p className="text-center sm:mx-30 md:mx-40 lg:mx-60 px-4">
        Experience comfort, luxury, and exceptional hospitality through the words of our delighted guests. 
        Their stories reflect the warmth, service, and unforgettable moments that make every stay special.
        </p>
      </section>

      <section className="max-[640px]:mx-2 sm:max-w-[100%] m-auto mt-4 sm:mt-6 md:mt-8 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((d, index) => (
          <div
            key={index}
            className="bg-white h-full text-black p-2 sm:p-3 md:p-4 my-5 sm:my-4 md:my-3 lg:my-2"
          >
            <div className="group border rounded-md border-gray-100 shadow-lg shadow-slate-300 hover:scale-105 transition-all duration-500 ">
              <div className="h-32 bg-[#9d789b] flex justify-center items-center rounded-t-md"></div>
              <div className="h-44 flex flex-col justify-center items-center bg-transparent mt-[-4rem]">
                <img
                  src={d.img}
                  alt="cover"
                  className="h-28 w-28 rounded-full object-cover bg-black border-4"
                />
                <p className="sm:text-xl md:text-2xl sm:font-medium md:font-semibold mt-6">
                  {d.name}
                </p>
              </div>

              <p className="border-b-[1px] border-gray-300 mx-4 mt-2"></p>
              <p className="text-center text-sm sm:text-base p-6 text-slate-600 group-hover:text-black flex">
                <span>
                  <ImQuotesLeft />
                </span>
                <span>{d.review}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
