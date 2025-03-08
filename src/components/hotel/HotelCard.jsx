/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HotelCard = ({ item }) => {
  const typeSet = new Set();
  Array.from(item.rooms).map((it) => typeSet.add(it.type));

  return (
    <>
      <Link to={`/hotel/${item._id}`} state={item}>
        <div className="group mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 shadow-lg shadow-slate-300 hover:bg-[#31b675] transition-all duration-700">
          <div className="overflow-hidden">
            <img
              src="/images/hero-1.jpeg"
              alt="Gallery Pic"
              className="rounded-md object-cover w-full h-full"
            />
          </div>

          <div className="mt-5 mb-4 justify-between items-center flex flex-wrap">
            <h3 className="text-xl font-semibold uppercase group-hover:text-white">
              {item.name}
            </h3>
            <label className="rounded-md text-sm text-white uppercase bg-[#31b675] px-2 py-1 group-hover:text-green-700 group-hover:bg-white">
              {item.city}
            </label>
          </div>

          <div>
            {Array.from(typeSet).map((it) => (
              <span
                key={it.id}
                className="rounded-md text-sm text-white uppercase bg-[#315db9a6] px-2 mr-2 py-1 group-hover:text-blue-700 group-hover:bg-white"
              >
                {it}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 mb-3 group-hover:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            mollitia sit laudantium maxime saepe! Repellendus vitae architecto
            voluptatem vero, {item.description} laborum ipsum quidem minus
            numquam quasi ipsa reiciendis doloremque aliquid officiis.
          </p>

          <button className="text-xs font-bold group-hover:text-white">
            READ MORE <i className="fa fa-long-arrow-right"></i>
          </button>
        </div>
      </Link>
    </>
  );
};

export default HotelCard;
