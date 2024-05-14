import cardMarketing from '../assets/card-marketing.png'
import community from '../assets/community.png'
import cardServices from '../assets/card-services.png'

const Feature = () => (
  <div className='container mx-auto py-20 grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
    <div className='grid grid-cols-1 grid-rows-2 items-center justify-items-center text-center gap-4'>
      <h3 className='text-poppins font-semibold text-4xl'>
        <span className='capitalize'>solutions </span>for every need
      </h3>

      <p className='text-paragraph'>
        <span className='capitalize'>join </span>thousands of marketers and entrepreneurs for a 2-day event at <br className='md:inline hidden' />
        the forefront of social commerce.
      </p>
    </div>

    <div className='grid grid-cols-1 grid-rows-3 xl:px-72 gap-4'>
      <div className='mx-12 sm:mx-0 grid sm:grid-cols-5 sm:grid-rows-[auto_auto_auto] grid-cols-1 grid-rows-[auto_auto] gap-4'>
        <div className='sm:sm:row-start-2 sm:col-span-3 sm:order-0 order-1 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] justify-items-start gap-4'>
          <p className='uppercase text-[#B33CDB] font-semibold text-sm'>influencer</p>

          <h3 className='text-poppins font-semibold text-3xl'>
            <span className='capitalize'>influencer </span>marketing
          </h3>

          <p className='text-paragraph'>
            <span className='capitalize'>create </span>infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs
          </p>

          <button className='font-medium text-[#42424A] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
            <span className='capitalize'>learn more</span>

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

        <div className='sm:row-span-3 sm:col-span-2'>
          <img
            src={cardMarketing}
            alt='marketing'
            className='w-full shadow-lg rounded-lg'
          />
        </div>
      </div>

      <div className='mx-12 sm:mx-0 grid sm:grid-cols-5 sm:grid-rows-[auto_auto_auto] grid-cols-1 grid-rows-[auto_auto] gap-4'>
        <div className='sm:row-start-2 sm:col-span-3 sm:col-start-3 sm:order-0 order-1 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] justify-items-start gap-4'>
          <p className='uppercase text-[#FBBA33] font-semibold text-sm'>community</p>

          <h3 className='text-poppins font-semibold text-3xl'>
            <span className='capitalize'>community </span>marketing
          </h3>

          <p className='text-paragraph'>
            <span className='capitalize'>bring </span>your relationships to new heights with our community product. Discover your biggest enthusiasts{' '}
          </p>

          <button className='font-medium text-[#42424A] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
            <span className='capitalize'>learn more</span>

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

        <div className='sm:row-span-3 sm:col-span-2 self-center'>
          <img
            src={community}
            alt='community'
            className='w-full'
          />
        </div>
      </div>

      <div className='mx-12 sm:mx-0 grid sm:grid-cols-5 sm:grid-rows-[auto_auto_auto] grid-cols-1 grid-rows-[auto_auto] gap-4'>
        <div className='sm:row-start-2 sm:col-span-3 sm:order-0 order-1 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] justify-items-start gap-4'>
          <p className='uppercase text-[#DE2879] font-semibold text-sm'>services</p>

          <h3 className='text-poppins font-semibold text-3xl'>
            <span className='capitalize'>managed </span>services
          </h3>

          <p className='text-paragraph'>
            <span className='capitalize'>our </span>full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling
          </p>

          <button className='font-medium text-[#42424A] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
            <span className='capitalize'>learn more</span>

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

        <div className='sm:row-span-3 sm:col-span-2 self-center'>
          <img
            src={cardServices}
            alt='service'
            className='w-full shadow-lg rounded-lg'
          />
        </div>
      </div>
    </div>
  </div>
)

export default Feature
