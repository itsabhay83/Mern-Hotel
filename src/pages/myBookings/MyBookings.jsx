import { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import { Link } from 'react-router-dom'

const MyBookings = () => {

  const [data, setData] = useState(null)

  const getUserBookings = async () => {
    await axiosInstance.get(`api/bookings/getUserBookings`)
      .then(res => { setData(res.data.bookings) })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    getUserBookings()
  }, [])


  return (
    <div className='bg-gray-50'>
      <section className='pt-6 sm:pt-0 sm:p-8 md:p-12 lg:p-16'>
        <h3 className="mt-2 mb-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase ">My Bookings</h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4 mb-10 md:mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </section>
      <div className='max-w-[95%] md:max-w-[90%] m-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 m-2'>
          {
            data?.map((item) => {
              return (
                <Link key={item.id} to={`/myBookings/${item._id}`} state={item} className='shadow-lg shadow-gray-300 hover:scale-105 duration-700 group'>
                  <div className='bg-[#2BAE66FF] py-4 rounded-t-lg'>
                    <h1 className='text-center text-4xl font-bold text-black group-hover:text-white pt-2 pb-4'>{item.hotelName}</h1>
                  </div>
                  <div className='flex flex-col p-4 bg-white rounded-b-lg'>

                    <div className='flex max-[303px]:flex-col flex-wrap justify-between mt-2 mb-6 gap-2 '>
                      <div className='flex flex-col items-center'>
                        <h1>Check In Date</h1>
                        <h1 className='group-hover:text-black text-gray-600'>{item.checkinDate.split("T")[0]}</h1>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h1>Check Out Date</h1>
                        <h1 className='group-hover:text-black text-gray-600'>{item.checkoutDate.split("T")[0]}</h1>
                      </div>
                    </div>

                    <div className='flex flex-wrap justify-between my-6'>
                      <div className='flex flex-col items-center'>
                        <h1>Adults</h1>
                        <h1 className='group-hover:text-black text-gray-600'>{item.adults}</h1>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h1>Children</h1>
                        <h1 className='group-hover:text-black text-gray-600'>{item.children}</h1>
                      </div>
                      <div className='flex flex-col items-center'>
                        <h1>Pets</h1>
                        <h1 className='group-hover:text-black text-gray-600'>{item.pets}</h1>
                      </div>

                    </div>

                    <div className='w-full text-center rounded-md py-1 bg-blue-400 group-hover:bg-blue-900 group-hover:text-white'>Booked</div>

                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MyBookings