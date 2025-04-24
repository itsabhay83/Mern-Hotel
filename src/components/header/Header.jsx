import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../data";
import { IconContext } from "react-icons";
import { FaAlignLeft } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { BsBackspaceFill, BsBackspaceReverseFill } from "react-icons/bs";
import { AiOutlineSolution } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import axiosInstance from "../../axios";
import WalletInfo from "../wallet/walletInfo"; // Ensure this path is correct

const Header = () => {
  const [click, setClick] = useState(false);
  const [account, setAccount] = useState(false);
  const [walletVisible, setWalletVisible] = useState(false);
  const [profile, setProfile] = useState(null);

  const token = localStorage.getItem("access_token");
  const id = localStorage.getItem("_id");

  const handleClick = () => {
    setClick(!click);
    setAccount(false);
    setWalletVisible(false);
  };

  const handleAccount = () => {
    setAccount(!account);
    setClick(false);
    setWalletVisible(false);
  };

  const toggleWallet = () => {
    setWalletVisible(!walletVisible);
    setClick(false);
    setAccount(false);
  };

  const closeMobileMenu = () => setClick(false);
  const closeMobileAccount = () => setAccount(false);

  const getUser = () => {
    axiosInstance.get(`api/users/${id}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    id && getUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <>
      <nav className='bg-black sticky top-0 z-50 w-full py-6 sm:px-4 md:px-16 leading-relaxed'>
        <div className='flex text-white justify-between relative'>
          <div className='sm:hidden text-xl pl-2 mt-1 hover:cursor-pointer' onClick={handleClick}>
            {click ? <IconContext.Provider value={{ color: "white" }}><BsBackspaceFill /></IconContext.Provider>
              : <IconContext.Provider value={{ color: "white" }}><FaAlignLeft /></IconContext.Provider>}
          </div>

          <div className="sm:hidden text-lg font-extrabold mr-6">
            <Link to='/'>HOTEL</Link>
          </div>

          <div className="sm:hidden">
            {click && (
              <ul className='w-full absolute p-1 z-50 left-0 top-7 bg-green-800 mt-6 flex flex-col text-center sm:hidden'>
                {nav.map(({ url, title, name }) => (
                  <li key={url} className="text-base my-2 hover:scale-110 hover:font-semibold hover:text-blue-300">
                    <Link to={url} onClick={closeMobileMenu}>{name ? name : title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <ul className='hidden sm:flex sm:flex-wrap'>
            {nav.map(({ url, title, name }) => (
              <li key={url} className="mr-5 text-base inline-block ease-out hover:scale-110 hover:text-stone-400">
                <Link to={url} onClick={closeMobileMenu}>{name ? name : title}</Link>
              </li>
            ))}
          </ul>

          {token ? (
            <>
              <div className='flex items-center space-x-2'>
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-1 text-sm" onClick={toggleWallet}>Wallet</button>
                <div className='text-xl hover:cursor-pointer mt-1' onClick={handleAccount}>
                  {account ? <img src="/images/user-icon.png" alt="cover" className="w-9 -mt-2 outline-dotted rounded-full" />
                    : <img src="/images/user-icon.png" alt="cover" className="w-9 -mt-2 rounded-full" />}
                </div>
              </div>

              {account && (
                <ul className='max-w-full min-w-60 p-3 absolute z-50 top-8 sm:top-7 ease-in-out right-1 sm:-right-2 md:-right-4 rounded-lg bg-[#186366] mt-6 flex flex-col'>
                  <li className='flex text-base my-3 pb-[2px]'>
                    {profile && (
                      <>
                        <div className="mx-3 py-4">
                          <img src="/images/user-icon.png" alt="cover" className="w-9 -mt-2 outline-dotted rounded-full" />
                        </div>
                        <div className="ml-1 mr-3">
                          <p>@{profile.username}</p>
                          <p className="mt-1 break-words">{profile.email}</p>
                        </div>
                      </>
                    )}
                  </li>
                  <hr />

                  <li className='flex text-base my-2 pt-[8px]'>
                    <span className="mx-5">
                      <IconContext.Provider value={{ color: "white", size: "1.35rem" }}><MdManageAccounts /></IconContext.Provider>
                    </span>
                    <Link to='/profile' className="w-full hover:scale-105 hover:cursor-pointer transition-all duration-200" onClick={closeMobileAccount} state={profile}>Profile</Link>
                  </li>
                  <li className='flex text-base my-2 pt-[8px]'>
                    <span className="mx-5">
                      <IconContext.Provider value={{ color: "white", size: "1.35rem" }}><AiOutlineSolution /></IconContext.Provider>
                    </span>
                    <Link to='/myBookings' className="w-full hover:scale-105 hover:cursor-pointer transition-all duration-200" onClick={closeMobileAccount}>My Bookings</Link>
                  </li>
                  <li className='flex text-base my-2 pt-[8px]'>
                    <span className="mx-5">
                      <IconContext.Provider value={{ color: "white", size: "1.25rem" }}><RiLogoutBoxLine /></IconContext.Provider>
                    </span>
                    <button type="button" className="w-full flex hover:scale-105 hover:cursor-pointer transition-all duration-200" onClick={() => { logout(); closeMobileAccount(); }}>Logout</button>
                  </li>
                </ul>
              )}

              {walletVisible && (
                <div className="absolute top-20 right-1 bg-gray-900 text-white p-4 rounded-xl shadow-lg z-50 min-w-[250px]">
                  <WalletInfo />
                </div>
              )}
            </>
          ) : (
            <>
              <ul className='hidden sm:flex'>
                <li className='mr-4 ease-out hover:scale-110 hover:text-stone-400'>
                  <Link to='/login'>Login</Link>
                </li>
                <li className='ease-out hover:scale-110 hover:text-stone-400'>
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
              <div className='text-xl absolute right-0 pr-2 hover:cursor-pointer mt-1 sm:hidden' onClick={handleAccount}>
                {account ? <IconContext.Provider value={{ color: "white" }}><BsBackspaceReverseFill /></IconContext.Provider>
                  : <IconContext.Provider value={{ color: "white", size: "1.5rem" }}><MdAccountCircle /></IconContext.Provider>}
              </div>
              {account && (
                <ul className='w-36 p-1 absolute z-50 top-8 ease-in-out right-1 rounded-md bg-green-800 mt-6 flex flex-col text-center sm:hidden'>
                  <li className='text-base my-2 pt-[2px] inline-block hover:scale-110 hover:font-semibold'>
                    <Link to='/login' onClick={closeMobileAccount}>Login</Link>
                  </li>
                  <li className='text-base my-2 pb-[2px] inline-block hover:scale-110 hover:font-semibold'>
                    <Link to='/register' onClick={closeMobileAccount}>Register</Link>
                  </li>
                </ul>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;