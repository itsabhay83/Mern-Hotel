
// eslint-disable-next-line react/prop-types
const Error = ({ data, error }) => {
  return (
    <>
      <section className='flex flex-wrap flex-col justify-center items-center my-auto h-72 max-w-[90%] m-auto'>
        <h1 className='text-5xl text-center text-red-700 font-bold'>ERROR 404!</h1>
        {data && <h1 className='mt-10 text-3xl text-center text-red-700 font-bold max-w-[90%] break-words'>{data}</h1> }
        {error && <h1 className='mt-10 text-5xl text-center text-red-700 font-bold max-w-[90%] break-words'>{error}</h1> }
        {(!data && !error) && <h1 className='text-5xl text-center text-red-700 font-bold'>PAGE NOT FOUND</h1>}
      </section>
    </>
  )
}

export default Error