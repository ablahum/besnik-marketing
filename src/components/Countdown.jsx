const Countdown = () => (
  <div className='bg-[#231A36]'>
    <div className='container mx-auto py-20 my-4 grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto] items-center justify-items-center text-center gap-4'>
        <h3 className='text-poppins font-semibold text-4xl text-white'>
          <span className='capitalize'>search </span>through more than 11 million
          <br className='md:inline hidden' /> social media profiles
        </h3>

        <p className='text-countdown'>
          <span className='capitalize'>heepsy’s </span>search filters help you find exactly what you’re looking for, and
          <br className='md:inline hidden' /> our influencer reports provide you with the metrics
        </p>
      </div>

      <div className='grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-2 grid-rows-2 gap-8 justify-items-center text-center'>
        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2'>
          <h4 className='text-poppins font-semibold text-4xl'>2260</h4>

          <p className='capitalize text-countdown'>satisfied brands</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2'>
          <h4 className='text-poppins font-semibold text-4xl'>1324</h4>

          <p className='capitalize text-countdown'>satisfied clients</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2'>
          <h4 className='text-poppins font-semibold text-4xl'>3453</h4>

          <p className='capitalize text-countdown'>sponsored</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2'>
          <h4 className='text-poppins font-semibold text-4xl'>9786</h4>

          <p className='capitalize text-countdown'>completed</p>
        </div>
      </div>
    </div>
  </div>
)

export default Countdown
