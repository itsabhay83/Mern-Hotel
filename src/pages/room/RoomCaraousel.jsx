import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoomCaraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col sm:py-1">
      <Slider {...settings}>
        {data.map((d, id) => (
          <div
            key={id}
            className="bg-white h-full sm:p-1 hover:scale-105 transition-all duration-500"
          >
            <img src={d.img} alt="cover" className="w-full h-80 bg-cover" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const data = [
  {
    id: 1,
    img: "/images/hero-1.jpeg",
  },
  {
    id: 2,
    img: "/images/hero-2.jpeg",
  },
  {
    id: 3,
    img: "/images/hero-3.jpeg",
  },
  {
    id: 4,
    img: "/images/hero-1.jpeg",
  },
  {
    id: 5,
    img: "/images/hero-2.jpeg",
  },
  {
    id: 6,
    img: "/images/hero-3.jpeg",
  },
];

export default RoomCaraousel;
