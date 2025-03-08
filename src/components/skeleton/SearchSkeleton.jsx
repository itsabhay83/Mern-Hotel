import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const SearchSkeleton = () => {
    
    return (
        <form className='flex flex-col sm:flex-row justify-between'>

            <div className='flex max-[500px]:flex-col justify-around flex-wrap sm:gap-4 lg:gap-20'>
                <div className='flex flex-col justify-around max-[500px]:flex-row'>
                    <span className="max-[350px]:hidden max-[500px]:py-2"><Skeleton count={1} width={50} /></span>
                    <p className="mt-1 rounded-md lg:w-28" >
                        <Skeleton count={1} width={100} height={30} />
                    </p>
                </div>
                <div className='flex flex-col justify-around max-[500px]:flex-row'>
                    <span className="max-[350px]:hidden max-[500px]:py-2"><Skeleton count={1} width={50} /></span>
                    <p className="mt-1 rounded-md lg:w-28" >
                        <Skeleton count={1} width={100} height={30} />
                    </p>
                </div>
                <div className='flex flex-col justify-around max-[500px]:flex-row min-[1150px]:w-80'>
                    <span className="max-[350px]:hidden max-[500px]:py-2"><Skeleton count={1} width={50} /></span>
                    <p className="rounded-md lg:w-28" >
                        <Skeleton count={1} width={250} height={30} />
                    </p>
                </div>
            </div>

            <div className='px-6 sm:px-0 mt-7 lg:mt-1 mx-auto sm:mx-0'>
                    <Skeleton count={1} width={150} className="h-9 lg:h-14 w-full rounded-lg"/>
            </div>
        </form>
    )
}

export default SearchSkeleton