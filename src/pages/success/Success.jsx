import { useEffect, useState } from 'react'
import axiosInstance from '../../axios';
import Error from '../../components/error/Error';
import { Link } from 'react-router-dom';
import Booking from '../../components/booking/Booking';


const Success = () => {
  var urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get('session_id');

  const [data, setData] = useState(null)
  const [errordata, setErrorData] = useState(null)

  const confirmPayment = async () => {
    await axiosInstance.post(`api/bookings/createBooking/${name}`)
      .then(() => getPaymentDetails())
      .catch((err) => setErrorData(err.response.data))
  }

  const getPaymentDetails = async () => {
    await axiosInstance.get(`api/bookings/getBooking/${name}`)
      .then((res) => {
        //console.log(res.data); 
        res.data.adults !== undefined ? setData(res.data) : setErrorData("Tryna be Smart...HAHAHA...I've covered edge cases too...")
      })
      .catch((err) => setErrorData(err.response.data))
  }

  useEffect(() => {
    window.history.go(1)
    name?.length == 66 && confirmPayment()
  }, [])


  return (
    <>
      {
        name?.length == 66
          ? errordata
            ? <Error data={errordata} />
            : (
              <section className='max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[75%] pt-4 pb-10 m-auto'>
                <div className='flex flex-wrap justify-between mb-6'>
                  <Link to='/' className='py-2 mt-2 text-white bg-green-400 px-2 rounded-md hover:scale-105 hover:bg-green-600'>Go to Home</Link>
                  <Link to='/myBookings' className='py-2 mt-2 text-white bg-green-400 px-2 rounded-md hover:scale-105 hover:bg-green-600'>Go to My Booking</Link>
                </div>
                <h1 className='text-4xl font-semibold text-center animate-pulse my-8 text-blue-600'>Thank you for your Booking</h1>
                <h1 className='text-xl font-semibold text-center animate-bounce mb-4 text-teal-600'>Hers&apos;s your receipt</h1>
                <Booking data={data} />
              </section>
              )

          : <Error />
      }

    </>
  )
}

export default Success