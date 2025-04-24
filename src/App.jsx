import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Profile from "./pages/profile/Profile";
import MyBookings from './pages/myBookings/MyBookings';
import SingleBooking from './pages/myBookings/SingleBooking';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from './components/error/Error';
import SingleBlog from './pages/blog/SingleBlog';
import Testimonial from './pages/testimonial/Testimonial';
import Hotel from './pages/hotels/Hotel';
import SingleHotel from './pages/hotels/SingleHotel';
import Room from './pages/room/Room';
import PrivateRoute from './PrivateRoute';
import Success from "./pages/success/Success";
import Cancel from "./pages/cancel/Cancel";

import { CivicAuthProvider } from "@civic/auth-web3/react";
import WalletInfo from "./components/wallet/walletInfo";

const App = () => {
  return (
    <CivicAuthProvider clientId={import.meta.env.VITE_CIVIC_CLIENT_ID}>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Private Routes (require login) */}
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/singleBlog/:id' element={<SingleBlog />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/hotel/:id' element={<SingleHotel />} />
          <Route path='/room/:id' element={<Room />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myBookings' element={<MyBookings />} />
          <Route path='/myBookings/:id' element={<SingleBooking />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
          <Route path='/wallet' element={<WalletInfo />} />
        </Route>

        {/* Catch-all */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </CivicAuthProvider>
  );
};

export default App;
