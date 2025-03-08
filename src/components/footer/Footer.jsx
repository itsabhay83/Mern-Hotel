import { Link } from "react-router-dom"
import { data } from "../data"
import { SlCalender } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white sm:p-14 pt-6">
        <div className='w-full m-auto grid grid-cols-2 lg:grid-cols-4'>
          <div className="mx-3 sm:ms-6">
            <h2 className="text-lg sm:text-2xl font-semibold mb-5 tracking-wider">ABOUT US</h2>
            <p className="text-sm sm:text-base opacity-80 font-light tracking-wider">Our hotel booking platform makes finding and reserving the perfect stay effortless.</p>
            <br />
            <p className="text-sm sm:text-base opacity-80 font-light tracking-wider"> With a wide range of accommodations, seamless booking, and exclusive deals, we ensure a hassle-free experience for travelers seeking comfort, convenience, and quality service</p>
            <div className="flex flex-wrap mt-4">
              <i className='fab fa-facebook-f text-2xl mr-3 sm:mr-5 lg:mr-7' ></i>
              <i className='fab fa-twitter text-2xl mr-3 sm:mr-5 lg:mr-7'></i>
              <i className='fab fa-linkedin text-2xl mr-3 sm:mr-5 lg:mr-7'></i>
              <i className='fab fa-instagram text-2xl mr-3 sm:mr-5 lg:mr-7'></i>
            </div>
          </div>

          <div className="mx-3 sm:ms-6">
            <h3 className="text-lg sm:text-2xl font-semibold mb-5 tracking-wider">CONTACT US</h3>
            <h3 className="text-lg font-medium mb-2">Visit our location</h3>
            <p className="text-sm sm:text-base text-gray-500">HAK, Hiranagar, Hamirpur, Himachal Pradesh 177001</p>
            <br />

            <h3 className="text-lg font-medium mb-2">Message us</h3>
            <p className="text-gray-500 mb-2">HAK@hotelhak.com</p>
            <p className="text-gray-500">+91 99677 84567</p>

            {/* <h2 className="text-lg sm:text-2xl font-semibold mb-5 tracking-wider">NEWSLETTER</h2>
            <p className="text-sm sm:text-base opacity-80 font-light tracking-wider">Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input className="w-full bg-black border-solid border my-3 rounded-none p-2" type='text' name='' id='' />
            <input className="w-full text-sm bg-green-600 border-solid border my-3 rounded-none p-5 text-center text-white" type='text' value='SUBSCRIBE' /> */}
          </div>

          <div className="mx-3 sm:ms-6 my-4 mt-10 md:mt-16 lg:mt-0 ">
            <h2 className="text-lg sm:text-2xl font-semibold mb-5 tracking-wider">NAVIGATION</h2>
            <ul>
              {data.map(({ url, title }) => (
                <li className="mb-5" key={title}>
                  <Link className="opacity-70 text-white text-sm sm:text-base" to={url}>{title}</Link>
                </li>
              ))
              }
            </ul>
          </div>

          <div className="mx-3 sm:ms-6 my-4 mt-10 md:mt-16 lg:mt-0 lg:ml-[-1rem]">
            <h2 className="text-lg sm:text-2xl font-semibold mb-5 tracking-wider">RECENT POSTS</h2>
            <ul>
              <li className="mb-5 border-b-2 border-b-stone-700">
                <p className="text-sm sm:text-sm opacity-80 font-light tracking-wider">"Budget-Friendly Stays: Affordable Hotels with Premium Comfort" – Discover hidden gems that provide great stays without breaking the bank.</p>
                <p className="flex opacity-50 mt-2 text-xs">
                  <SlCalender />
                  <span className="ml-2">21 September 2024</span>
                </p>
              </li>
              <li className="mb-5 border-b-2 border-b-stone-700">
                <p className="text-sm sm:text-sm opacity-80 font-light tracking-wider">"Last-Minute Hotel Deals: Grab Exclusive Discounts Now!" – Unmissable offers on premium hotels for spontaneous travelers.</p>
                <p className="flex opacity-50 mt-2 text-xs">
                  <SlCalender />
                  <span className="ml-2">01 Oct 2024</span>
                </p>
              </li>
              <li className="mb-5 border-b-2 border-b-stone-700">
                <p className="text-sm sm:text-sm opacity-80 font-light tracking-wider">"Romantic Escapes: Best Hotels for Honeymooners" – Handpicked hotels offering dreamy experiences for couples.</p>
                <p className="flex opacity-50 mt-2 text-xs">
                  <SlCalender />
                  <span className="ml-2">29 Dec 2024</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='text-center p-2 sm:p-5 bg-black text-white border-t'>
        <p className="opacity-sm:text-base 50">© 2025 All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
