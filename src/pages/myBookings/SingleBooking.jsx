import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Booking from '../../components/booking/Booking'

const SingleBooking = () => {
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    })
 
    return (
        <>
            <section className='sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] m-auto py-8'>
                <h3 className="my-2 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase ">Booking</h3>
                <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
                <Booking data={location.state} />
            </section>
        </>

    )
}

export default SingleBooking