import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const BlogCard = ({ item: { id, cover, title, para, catgeory, date } }) => {
  return (
    <>
      <Link to={`/singleBlog/${id}`} >
        <div className='group mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 shadow-lg shadow-slate-300 hover:bg-[#31b675] transition-all duration-700'>

          <div className="overflow-hidden">
            <img src={cover} alt='Gallery Pic' className='rounded-md object-cover w-full h-full' />
          </div>

          <div className='mt-5 mb-4 flex justify-between items-center'>
            <span className="text-gray-500 text-sm mr-2 group-hover:text-white">{date}</span>
            <label className="rounded-md text-sm text-white bg-[#31b675] px-4 py-1 group-hover:text-[#31b675] group-hover:bg-white">{catgeory}</label>
          </div>

          <div className=''>
            <h3 className="text-xl font-medium capitalize group-hover:text-white">{title}</h3>
            <p className="text-sm text-gray-500 mt-2 mb-3 group-hover:text-white">{para}</p>
          </div>

          <button className='text-xs font-bold group-hover:text-white'>
            READ MORE <i className='fa fa-long-arrow-right'></i>
          </button>

        </div>
      </Link>
    </>
  )
}

export default BlogCard
