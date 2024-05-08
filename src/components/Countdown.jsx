const Countdown = () => (
  <div className='bg-[#231A36]'>
    <div className='container mx-auto py-24 grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-3'>
        <h3 className='text-poppins font-semibold text-4xl text-white text-center'>
          <span className='capitalize'>search </span>through more than 11 million
          <br /> social media profiles
        </h3>

        <p className='text-center text-countdown'>
          <span className='capitalize'>heepsy’s </span>search filters help you find exactly what you’re looking for, and
          <br /> our influencer reports provide you with the metrics
        </p>
      </div>

      <div className='px-72 grid grid-cols-4 grid-rows-1 gap-8'>
        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2 justify-items-center'>
          <h4 className='text-poppins font-semibold text-4xl'>2260</h4>

          <p className='capitalize text-countdown'>satisfied brands</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2 justify-items-center'>
          <h4 className='text-poppins font-semibold text-4xl'>1324</h4>

          <p className='capitalize text-countdown'>satisfied clients</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2 justify-items-center'>
          <h4 className='text-poppins font-semibold text-4xl'>3453</h4>

          <p className='capitalize text-countdown'>sponsored</p>
        </div>

        <div className='text-white grid grid-cols-1 grid-rows-2 gap-2 justify-items-center'>
          <h4 className='text-poppins font-semibold text-4xl'>9786</h4>

          <p className='capitalize text-countdown'>completed</p>
        </div>
      </div>
    </div>
  </div>
)

export default Countdown
