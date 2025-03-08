import { Link } from 'react-router-dom'

const HeroAbout = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-2 m-4 mt-12 sm:mt-20 sm:m-8 md:m-12 lg:m-28'>
        <div className='md:max-w-[90%]'>
          <h1 className='text-xl font-semibold text-green-900'>About us</h1>

          <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-6xl text-wrap my-2'>We <span className='font-bold'>provide Solution</span> to grow your business</h1>

          <p className='mt-4 md:mt-10 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p className='my-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>

          <Link to={`/about`}>
            <button className='px-2 sm:px-4 py-2 md:py-2 bg-[#038c7f] rounded-lg md:rounded-2xl shadow-sm shadow-[#038c7f] text-white font-bold text-xs md:text-sm hover:scale-110 duration-300 transition-all'>
              Explore more <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </Link >
        </div>

        <div className='overflow-hidden rounded-lg md:h-auto mt-4 md:mt-0' >
          <img src="/images/hero-1.jpeg" alt='hero' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
        </div>
      </div>
    </>
  )
}

export default HeroAbout