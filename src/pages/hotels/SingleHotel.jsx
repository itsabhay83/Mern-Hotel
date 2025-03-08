import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import RoomCard from '../../components/room/RoomCard';

const SingleHotel = () => {
  const location = useLocation();
  const data = location.state;

  const [name] = useState(data?.name)
  const [city] = useState(data?.city)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])


  return (
    <div>

      <section className="mt-6 sm:mt-8 md:mt-12 ">
        <h3 className="my-5 text-center text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">{data?.name} ({data?.city}) </h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime voluptate magnam eaque, nam cupiditate eum ipsa! Molestias omnis maiores repellat eos aperiam velit natus quaerat! Modi fugit minus perferendis.
        </p>
      </section>
      <section className='mt-6 sm:mt-8 md:mt-12 max-w-[85%] m-auto'>
        <div className='grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8'>
          {data?.rooms?.map((item) => <RoomCard key={item.id} item={item} city={city} name={name} />
          )}
        </div>
      </section>

    </div>
  );
};

export default SingleHotel