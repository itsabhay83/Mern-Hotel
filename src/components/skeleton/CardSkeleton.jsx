import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Card = () => {
    return (
        <div className='mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 shadow-lg shadow-slate-300 '>

            <p>
                <Skeleton count={1} height={250} className='rounded-md object-cover' />
            </p>

            <div className='mt-5 mb-4 flex justify-between'>
                <p><Skeleton count={1} height={28} width={150} /></p>
                <p><Skeleton count={1} height={28} width={75} /></p>
            </div>

            <span className='flex gap-2'>
                <p><Skeleton count={1} height={25} width={75} /></p>
                <p><Skeleton count={1} height={25} width={75} /></p>
                <p><Skeleton count={1} height={25} width={75} /></p>
            </span>

            <p className="mt-4 mb-3">
                <Skeleton count={5} />
            </p>

            <p>
                <Skeleton count={1} width={100} height={20} />
            </p>
        </div>
    )
}

const CardSkeleton = () => {
    return (

        <div className='grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardSkeleton