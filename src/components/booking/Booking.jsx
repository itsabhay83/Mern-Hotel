/* eslint-disable react/prop-types */

const Booking = ({data}) => {
    return (
        <div className='bg-[#fff8dc] rounded-md p-6 sm:p-8 md:p-10 lg:p-14 shadow-md shadow-slate-300'>
            {
                data &&
                <div className='flex flex-col'>

                    <div className='flex justify-between bg-green-500 p-4 rounded-md flex-wrap'>
                        <h1 className='text-4xl font-bold text-white'>{data.hotelName}</h1>
                        {/* <h1 className='py-2 text-slate-500'><span className='font-semibold text-black'>Booking Id:</span> {data.bookingId.split(0, 66)[1]}</h1> */}
                        <h1 className='py-2 font-semibold'>Status: <span className='text-white'>Booked</span></h1>
                    </div>

                    <div className='flex justify-between px-4 mt-10 flex-wrap gap-4'>
                        <div className='flex flex-col '>
                            <h1 className='text-xl font-semibold mb-1'>From,</h1>
                            <h1 className='text-slate-500'>221B</h1>
                            <h1 className='text-slate-500'>Baker&apos;s Street</h1>
                            <h1 className='text-slate-500'>London - 454487</h1>
                        </div>
                        <div className='flex flex-col '>
                            <h1 className='text-xl font-semibold mb-1'>To,</h1>
                            <h1 className='text-slate-500'>{data.address.line1},{data.address.line2}</h1>
                            <h1 className='text-slate-500'>{data.address.city}, {data.address.state}</h1>
                            <h1 className='text-slate-500'>{data.address.country} - {data.address.postal_code}</h1>
                        </div>
                    </div>

                    <hr className='mt-4' />

                    <div className='flex justify-between mt-10 flex-wrap gap-4'>

                        <div className='flex flex-col flex-wrap'>
                            <h1 className='text-xl font-semibold px-1 py-2 text-slate-800'>Booking Details</h1>
                            <div className='grid grid-cols-2 gap-1 sm:gap-2 md:gap-4 lg:gap-6 shadow-sm'>
                                <div>
                                    <h1 className='p-1 break-words'>Accommodation</h1>
                                    <hr />
                                    <h1 className='p-1'>Check In Date</h1>
                                    <hr />
                                    <h1 className='p-1'>Check Out Date</h1>
                                    <hr />
                                </div>

                                <div>
                                    <h1 className='p-1 text-slate-500'>{data.hotelName}</h1>
                                    <hr />
                                    <h1 className='p-1 text-slate-500'>{data.checkinDate.split("T")[0]}</h1>
                                    <hr />
                                    <h1 className='p-1 text-slate-500'>{data.checkoutDate.split("T")[0]}</h1>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col '>
                            <h1 className='text-xl font-semibold px-1 py-2 text-slate-800'>Guest Details</h1>
                            <div className='grid grid-cols-2 gap-1 sm:gap-2 md:gap-4 lg:gap-6 shadow-sm'>
                                <div>
                                    <h1 className='p-1'>Adults</h1>
                                    <hr />
                                    <h1 className='p-1'>Children</h1>
                                    <hr />
                                    <h1 className='p-1'>Pets</h1>
                                    <hr />
                                </div>

                                <div>
                                    <h1 className='p-1 text-slate-500'>{data.adults}</h1>
                                    <hr />
                                    <h1 className='p-1 text-slate-500'>{data.children}</h1>
                                    <hr />
                                    <h1 className='p-1 text-slate-500'>{data.pets}</h1>
                                    <hr />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col'>
                            <h1 className='text-xl font-semibold px-1 py-2 text-slate-800'>Price Details</h1>
                            <div className='grid grid-cols-2 gap-1 sm:gap-2 md:gap-4 lg:gap-6 shadow-sm'>
                                <div>
                                    <h1 className='p-1'>Price</h1>
                                    <hr />
                                    <h1 className='p-1'>Discount</h1>
                                    <hr />
                                    <h1 className='p-1 text-xl font-bold'>Total</h1>
                                    <hr />
                                </div>

                                <div>
                                    <h1 className='p-1 text-slate-500'>{Math.round(data.price - (data.price / 10))}</h1>
                                    <hr />
                                    <h1 className='p-1 text-slate-500'>10%</h1>
                                    <hr />
                                    <h1 className='p-1 text-xl font-bold'>{data.price}</h1>
                                    <hr />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            }


        </div>
    )
}

export default Booking