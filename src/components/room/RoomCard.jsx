/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const RoomCard = ({ item, name, city }) => {
  return (
    <>
      <div className=" group mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 hover:bg-emerald-100 bg-white">
        <div className="overflow-hidden">
          <img
            src="/images/hero-1.jpeg"
            alt="Gallery Pic"
            className="rounded-md object-cover w-full h-full group-hover:scale-125 duration-700 transition-all"
          />
        </div>

        <div className="my-3 justify-between items-center flex flex-wrap">
          <h3 className="text-xl font-semibold uppercase">
            {name ? name : item.hotelName}
          </h3>
          <label className="rounded-md uppercase px-2 py-1 flex font-bold align-middle">
            <span className="mt-[5px] mr-1 ">
              <FaRupeeSign />
            </span>
            <span className="text-[#f27405] text-lg">{item.price}</span>
          </label>
        </div>

        <div className="my-3 justify-between items-center flex flex-wrap">
          {/* <span className="rounded-md text-sm text-white uppercase bg-[#d18945] px-2 py-1">{item.title}</span> */}
          <span className="rounded-md text-sm text-white uppercase bg-[#315db9a6] px-2 py-1">
            {item.type}
          </span>
          <label className="rounded-md text-sm text-white uppercase bg-[#31b675] px-2 py-1">
            {city ? city : item.cityName}
          </label>
        </div>

        <div className="">
          <p className="text-sm text-gray-800 group-hover:text-black my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            itaque, et, ut deserunt suscipit voluptates placeat,{" "}
            {item.description} dolore odit vel facilis neque? Numquam, a!
            Perferendis blanditiis vero animi aut ex illo.
          </p>
        </div>

        <Link to={`/room/${item._id}`} state={[item, name, city]}>
          <button className="w-full font-bold text-white bg-[#038c7f] rounded-md py-2 hover:scale-105 hover:text-black">
            BOOK NOW
          </button>
        </Link>
      </div>
    </>
  );
};

export default RoomCard;
