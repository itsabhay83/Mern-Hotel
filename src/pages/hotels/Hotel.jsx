import { useEffect, useState } from 'react'
import axiosInstance from "../../axios"
import HotelCard from "../../components/hotel/HotelCard"
import RoomCard from "../../components/room/RoomCard"
import CardSkeleton from '../../components/skeleton/CardSkeleton'
import SearchSkeleton from '../../components/skeleton/SearchSkeleton'


const Hotel = () => {
    const [hotels, setHotels] = useState(null)
    const [selectedType, setSelectedType] = useState("Select Type")
    const [selectedCity, setSelectedCity] = useState("Select City")
    const [hotelName, setHotelName] = useState("")
    const [searchedHotel, setSearchedHotel] = useState(null)
    const [notice, setNotice] = useState(false)

    const getHotels = async () => {
        await axiosInstance.get(`api/hotels/`).then(async (res) => {
            setHotels(res.data)
        })
    }

    const getNotice = async () => {
        await new Promise((resolve) => setTimeout(resolve, 10000))
        setNotice(true)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getHotels()
        getNotice()
    }, [])


    const citySet = new Set()
    hotels && hotels.map(item => citySet.add(item.city))

    const typeSet = new Set()
    hotels && hotels.map(item => (item.rooms.map(it => typeSet.add(it.type))))


    var arr = []
    const submitForm = async (e) => {
        e.preventDefault()

        const arr1 = []
        if (selectedType !== "Select Type") {
            hotels.map((item) => {
                item.rooms.map((it) => {
                    if (it.type == selectedType) {
                        it = { ...it, hotelName: item.name, cityName: item.city }
                        arr1.push(it)
                    }
                })
            })

            arr.length > 0 ? arr = haveCommonItems(arr, arr1) : arr = arr1
        }

        const arr2 = []
        if (selectedCity !== "Select City") {
            hotels.map((item) => {
                if (item.city == selectedCity) {
                    item.rooms.map((it) => {
                        it = { ...it, hotelName: item.name, cityName: item.city }
                        arr2.push(it)
                    })
                }
            })

            arr.length > 0 ? arr = haveCommonItems(arr, arr2) : arr = arr2
        }

        const arr3 = []
        if (hotelName !== "") {
            hotels.map((item) => {
                if (item.name.includes(hotelName) || item.name.toLowerCase().includes(hotelName)) {
                    item.rooms.map((it) => {
                        it = { ...it, hotelName: item.name, cityName: item.city }
                        arr3.push(it)
                    })
                }
            })
            arr.length > 0 ? arr = haveCommonItems(arr, arr3) : arr = arr3
        }



        function haveCommonItems(arr1, arr2) {
            var array = []
            arr2.filter(item => {
                arr1.filter(it => {
                    if (it._id == item._id) {
                        if (it) {
                            array.push(it)
                        }
                    }
                })
            });
            return array;
        }

        setSearchedHotel(arr)
    }


    return (
        <div className='relative'>
            {
                (hotels?.length == 0 || hotels == null) && notice && <div className='absolute z-10 w-full flex'>
                    <section className="bg-zinc-900 w-[95%] sm:w-[75%] md:w-[50%] m-auto flex flex-col gap-6 p-4 sm:p-8 md:p-10 lg:p-12 rounded-md text-white mt-10 sm:mt-0">

                        <h1 className="text-center font-bold text-3xl text-red-600">IMPORTANT!</h1>
                        <h1>You are seeing this message because the Backend Server is hosted on RENDER&apos;s FREE Tier Web Service and it spin down after 15 minutes of inactivity.</h1>
                        <h1>Since there are no active users and I am using a Free Service, the first request might take longer to respond.</h1>
                        <h1 className="uppercase text-center text-xl font-bold mt-10 text-blue-500">So please refresh the page and wait for 20-30 seconds</h1>

                    </section>
                    {
                        setTimeout(() => {
                            window.location.href = "/hotels"
                        }, 5000)
                    }
                </div>
            }

            <section className='mt-4 sm:m-8 md:m-12'>
                <h3 className="my-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase ">Hotels</h3>
                <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
            </section>


            <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[85%] m-auto sm:px-4 md:px-6 lg:px-10 py-5 my-6 sm:my-0 rounded-md bg-[#f2c641]'>
                {
                    (hotels?.length == 0 || hotels == null) ? <SearchSkeleton /> :

                        <form onSubmit={submitForm} className='flex flex-col sm:flex-row justify-between'>

                            <div className='flex max-[500px]:flex-col justify-around flex-wrap sm:gap-4 lg:gap-20'>
                                <div className='flex flex-col justify-around max-[500px]:flex-row'>
                                    <span className="max-[350px]:hidden max-[500px]:py-2">Type</span>
                                    <select className=" border border-gray-300 bg-gray-200 py-2 mt-1 rounded-md lg:w-28" name='type' value={selectedType} onChange={(e) => { setSelectedType(e.target.value) }}>
                                        <option>Select Type</option>
                                        {
                                            Array.from(typeSet).map((item) => (
                                                <option key={item._id} value={item} className='capitalize'>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='flex flex-col justify-around max-[500px]:flex-row'>
                                    <span className="max-[350px]:hidden max-[500px]:py-2">City</span>
                                    <select className=" border border-gray-300 bg-gray-200 py-2 mt-1 rounded-md lg:w-28" name='type' value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value) }}>
                                        <option >Select City</option>
                                        {
                                            Array.from(citySet).map((item) => (
                                                <option key={item._id} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='flex flex-col justify-around max-[500px]:flex-row min-[1150px]:w-80'>
                                    <span className="max-[350px]:hidden max-[500px]:py-2">Hotel Name</span>
                                    <input className="pl-2 border border-gray-300 py-2 mt-1 h-9 rounded-md" placeholder='Search Hotel Name' type='text' name='hotelName' value={hotelName} onChange={(e) => { setHotelName(e.target.value) }} />
                                </div>
                            </div>

                            <div className='px-6 sm:px-0 mt-7 lg:mt-1'>
                                <button className='w-full px-6 rounded-lg md:px-8 lg:px-10 h-9 lg:h-14 bg-[#038c7f] shadow-sm shadow-[#038c7f] text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all'>Search</button>
                            </div>
                        </form>
                }
            </div>

            <section className='my-6 sm:my-8 md:my-12 lg:my-16'>
                <div className='max-w-[95%] md:max-w-[90%] m-auto'>
                    {
                        (hotels?.length == 0 || hotels == null) && <CardSkeleton />
                    }

                    <div className='grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8'>
                        {searchedHotel == null || (selectedType == "Select Type" && selectedCity == "Select City" && hotelName == "")
                            ? hotels?.map(item => <HotelCard key={item.id} item={item} />)
                            : searchedHotel?.map(item => <RoomCard key={item.id} item={item} />)
                        }
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Hotel
