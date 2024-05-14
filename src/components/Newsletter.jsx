const Newsletter = () => (
  <div className='container mx-auto py-20 grid grid-cols-1 grid-rows-1 gap-8'>
    <div className='grid grid-cols-1 grid-rows-3 items-center justify-items-center text-center gap-4 p-8 bg-gradient-to-r from-[#e73635] to-[#6ad5ff] rounded-lg'>
      <h3 className='text-poppins font-semibold text-4xl text-white'>
        <span className='capitalize'>subscribe </span>our newsletter
      </h3>

      <p className='text-center text-white'>
        <span className='capitalize'>join </span>thousands of marketers and entrepreneurs for a 2-day event at
        <br className='md:inline hidden' />
        the forefront of social commerce.
      </p>

      <button className='bg-[#231A36] text-white px-6 py-3 rounded-full capitalize grid grid-cols-[auto_auto] grid-rows-1 gap-2'>
        subscribe
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </button>
    </div>
  </div>
)

export default Newsletter
