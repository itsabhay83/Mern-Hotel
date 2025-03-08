import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import RoomCaraousel from "./RoomCaraousel";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiSmokeBomb } from "react-icons/gi";
import { loadStripe } from "@stripe/stripe-js";
import axiosInstance from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRupeeSign } from "react-icons/fa";
import { toast } from "react-toastify";

const Room = () => {
  const location = useLocation();
  const data = location.state[0];
  const hotelName = location.state[1];

  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [noOfChildren, setNoOfChildren] = useState(0);
  const [noOfPets, setNoOfPets] = useState(0);

  const [isDisabled, setIsDisabled] = useState(false);

  const price = data.price;
  const discount = 10;
  const specialNote =
    "Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist";

  const discountPrice = price - (price / 100) * discount;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

    return noOfDays;
  };

  // payment integration
  const handleBookNowClick = async (e) => {
    e.preventDefault();

    if (!checkinDate || !checkoutDate) {
      toast.warn("Please provide checkin / checkout date");
      return;
    } else {
      // eslint-disable-next-line no-inner-declarations
      function addOneDay(date = new Date()) {
        date.setDate(date.getDate() + 1);
        return date;
      }

      const date1 = new Date(checkinDate);
      const date2 = new Date(checkoutDate);

      var result1 = addOneDay(date1);
      var result2 = addOneDay(date2);
    }

    const numberOfDays = calcNoOfDays();

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PROMISE);
    setIsDisabled(true);

    const formData = {
      price: Math.round(calcNoOfDays() * discountPrice),
      checkinDate: result1,
      checkoutDate: result2,
      adults,
      children: noOfChildren,
      numberOfDays,
      pets: noOfPets,
      hotelName,
      roomId: data._id,
    };
    try {
      const { data: session } = await axiosInstance.post(
        "api/bookings/create-checkout-session",
        formData
      );

      if (session.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          toast.error("Payment Failed");
          setIsDisabled(false);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <RoomCaraousel />

      <div className="mt-20 lg:mt-28 mx-4 sm:mx-8 md:mx-12 lg:mx-28">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-left text-lg md:text-4xl">
                {data.hotelName ? data.hotelName : hotelName} ({data.type})
              </h2>

              <div className="flex my-11 justify-between gap-4 flex-wrap">
                {data?.amenities?.slice(0, 4)?.map((amenity) => (
                  <div
                    key={amenity}
                    className="md:w-40 w-fit text-center px-2 md:px-0 h-20 md:h-36 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center"
                  >
                    <p className="max-[500px]:text-xs min-[500px]:text-sm sm:text-base pt-3">
                      {amenity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Description</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  {data.description} Quos maxime voluptate magnam eaque, nam
                  cupiditate eum ipsa! Molestias omnis maiores repellat eos
                  aperiam velit natus quaerat! Modi fugit minus perferendis.
                </p>
              </div>

              <div className="mb-14">
                <h2 className="font-bold text-3xl mb-4">Offered Amenities</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {data.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex justify-between md:my-0 my-1"
                    >
                      <p className="max-[500px]:text-xs min-[500px]:text-sm sm:text-base text-white px-2 rounded-md mr-2 py-1 bg-[#5b6f9a]">
                        {amenity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <section className="mb-11">
                <h2 className="font-bold text-3xl mb-4">Safety And Hygiene</h2>
                <div className="grid grid-cols-2">
                  <div className="flex items-center my-1 md:my-0">
                    <MdOutlineCleaningServices />
                    <p className="ml-2 max-[500px]:text-xs min-[500px]:text-sm sm:text-base">
                      Daily Cleaning
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <LiaFireExtinguisherSolid />
                    <p className="ml-2 max-[500px]:text-xs min-[500px]:text-sm sm:text-base">
                      Fire Extinguishers
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <AiOutlineMedicineBox />
                    <p className="ml-2 max-[500px]:text-xs min-[500px]:text-sm sm:text-base">
                      Disinfections and Sterilizations
                    </p>
                  </div>
                  <div className="flex items-center my-1 md:my-0">
                    <GiSmokeBomb />
                    <p className="ml-2 max-[500px]:text-xs min-[500px]:text-sm sm:text-base">
                      Smoke Detectors
                    </p>
                  </div>
                </div>
              </section>

              <div className="mb-14">
                <h2 className="font-bold text-3xl mb-4 break-words">
                  Complementary
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {data.complementary.map((item) => (
                    <div key={item} className="flex items-center md:my-0 my-1">
                      <p className="max-[500px]:text-xs min-[500px]:text-sm sm:text-base text-white px-2 rounded-md mr-2 py-1 bg-[#368130]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
            <div className="px-4 py-6 ">
              <h3 className="flex flex-wrap justify-center">
                <span
                  className={`${
                    discount ? "text-gray-400" : ""
                  } font-bold text-xl`}
                >
                  <span className="flex">
                    <span className="mt-1">
                      <FaRupeeSign />
                    </span>
                    {price}
                  </span>
                </span>
                {discount ? (
                  <span className="font-bold text-xl flex ml-2">
                    Now at
                    <span className="text-[#f27405] ml-2">
                      <span className="flex">
                        <span className="mt-1">
                          <FaRupeeSign />
                        </span>
                        {Math.round(discountPrice)}
                      </span>
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </h3>

              <div className="w-full border-b-2 border-b-secondary my-2" />

              <h4 className="my-8">{specialNote}</h4>

              <div className="flex">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="check-in-date"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Check In date
                  </label>
                  <DatePicker
                    id="check-in-date"
                    selected={checkinDate}
                    onChange={(date) => setCheckinDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="check-out-date"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Check Out date
                  </label>
                  <DatePicker
                    id="check-out-date"
                    minDate={calcMinCheckoutDate()}
                    selected={checkoutDate}
                    onChange={(date) => setCheckoutDate(date)}
                    dateFormat="dd/MM/yyyy"
                    disabled={!checkinDate}
                    className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="adults"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Adults
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg p-2.5"
                    type="number"
                    id="adults"
                    value={adults}
                    required
                    onChange={(e) => {
                      if (e.target.value > 5) {
                        toast.warn("Adults should be less than or equal to 5");
                        return;
                      }
                      if (e.target.value <= 0) {
                        toast.warn("Adults should be more than 1");
                        return;
                      }
                      setAdults(+e.target.value);
                    }}
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="children"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Children
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg p-2.5"
                    type="number"
                    id="children"
                    value={noOfChildren}
                    required
                    onChange={(e) => {
                      if (e.target.value > 3) {
                        toast.warn("Children should be less than or equal to 3");
                        return;
                      }
                      if (e.target.value < 0) {
                        toast.warn("Childrens should be more than or equal to 0");
                        return;
                      }
                      setNoOfChildren(+e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="children"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Pets
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg p-2.5"
                    type="number"
                    id="pets"
                    value={noOfPets}
                    required
                    onChange={(e) => {
                      if (e.target.value > 3) {
                        toast.warn("Pets should be less than or equal to 3");
                        return;
                      }
                      if (e.target.value < 0) {
                        toast.warn("Pets should be more than or equal to 0");
                        return;
                      }
                      setNoOfPets(+e.target.value);
                    }}
                  />
                </div>
              </div>

              {calcNoOfDays() > 0 ? (
                <p className="flex justify-center mt-6 -mb-3 text-white rounded-md py-2 bg-orange-500 font-semibold">
                  Total Price :{" "}
                  <span className="flex ml-2">
                    <span className="mt-1">
                      <FaRupeeSign />
                    </span>
                    {Math.round(calcNoOfDays() * discountPrice)}
                  </span>
                </p>
              ) : (
                <></>
              )}

              <button
                onClick={handleBookNowClick}
                disabled={isDisabled}
                className="bg-black text-white py-2 rounded-md w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
