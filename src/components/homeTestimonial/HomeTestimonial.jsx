/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { testimonial } from "../data";

const SampleNextArrow = ({onClick}) => {
  return (
    <div className="bg-slate-300 w-12 h-12 rounded-full cursor-pointer flex justify-center align-middle p-1 absolute top-[43%] right-0" onClick={onClick}>
      <button>
        <MdNavigateNext className="text-3xl" />
      </button>
    </div>
  );
};
const SamplePrevArrow = ({onClick}) => {
  return (
    <div className="bg-slate-300 w-12 h-12 rounded-full cursor-pointer flex justify-center align-middle p-1 absolute top-[43%] z-50" onClick={onClick}>
      <button>
        <GrFormPrevious className="text-3xl" />
      </button>
    </div>
  );
};

const HomeTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col max-[640px]:mx-2 sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] m-auto py-6 sm:my-10 md:my-16">

      <section>
        <h3 className="my-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold">Testimonials</h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
        Experience comfort, luxury, and exceptional hospitality through the words of our delighted guests. 
        Their stories reflect the warmth, service, and unforgettable moments that make every stay special.
        </p>
      </section>  

      <section className='max-[640px]:mx-2 sm:max-w-[100%] m-auto mt-4 sm:mt-6 md:mt-8 relative'>
        <Slider {...settings}>
          {testimonial.map((d) => (
            <div key={d.name} className="bg-white h-full text-black p-2 sm:p-3 md:p-4">

              <div className="group border rounded-md border-gray-100 shadow-lg shadow-slate-300 hover:scale-105 transition-all duration-500 ">
                <div className='h-32 bg-[#9d789b] flex justify-center items-center rounded-t-md'>
                </div>
                <div className='h-44 flex flex-col justify-center items-center bg-transparent mt-[-4rem]'>
                  <img src={d.img} alt="cover" className="h-28 w-28 object-cover rounded-full bg-black border-4" />
                  <p className="sm:text-xl md:text-2xl sm:font-medium md:font-semibold mt-6">{d.name}</p>
                </div>

                <p className="border-b-[1px] border-gray-300 mx-4 mt-2"></p>
                <p className="text-center text-sm sm:text-base p-6 text-slate-600 group-hover:text-black flex">
                  <span><ImQuotesLeft /></span>
                  <span>{d.review}</span>
                  </p>
              </div>
            </div>

          ))}
        </Slider>
      </section>
    </div>
  );
}


export default HomeTestimonial