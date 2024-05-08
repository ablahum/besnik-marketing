import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

const Service = () => (
  <div className='container mx-auto py-24 grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
    <div className='grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-3'>
      <h3 className='text-poppins font-semibold text-4xl'>
        <span className='capitalize'>solutions </span>for every need
      </h3>

      <p className='text-center text-paragraph'>
        <span className='capitalize'>join </span>thousands of marketers and entrepreneurs for a 2-day event at
        <br /> the forefront of social commerce.
      </p>
    </div>

    <div className='grid grid-cols-3 grid-rows-1 gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto] relative'>
        <img
          src={service1}
          alt='service1'
          className='w-full'
        />

        <div className='absolute bottom-[-6rem] left-0 grid grid-cols-[auto_2rem] grid-rows-1 gap-4 justify-items-start'>
          <div className='bg-white shadow-lg p-4 grid grid-cols-1 grid-rows-[auto_auto_auto] justify-items-start gap-4'>
            <p className='text-poppins font-semibold uppercase'>rebel clothing</p>

            <div className='grid grid-cols-2 grid-rows-1'>
              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>6.7 m</p>

                <p className='uppercase text-[#ADADBA] font-medium'>followers reach</p>
              </div>

              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>56.2 k</p>

                <p className='uppercase text-[#ADADBA] font-medium'>engagement</p>
              </div>
            </div>

            <button className='font-medium text-[#B33CDB] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
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
        </div>
      </div>

      <div className='grid grid-cols-1 grid-rows-[auto_auto] relative'>
        <img
          src={service2}
          alt='service2'
          className='w-full'
        />

        <div className='absolute bottom-[-6rem] left-0 grid grid-cols-[auto_2rem] grid-rows-1 gap-4 justify-items-start'>
          <div className='bg-white shadow-lg p-4 grid grid-cols-1 grid-rows-[auto_auto_auto] justify-items-start gap-4'>
            <p className='text-poppins font-semibold uppercase'>rebel clothing</p>

            <div className='grid grid-cols-2 grid-rows-1'>
              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>6.7 m</p>

                <p className='uppercase text-[#ADADBA] font-medium'>followers reach</p>
              </div>

              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>56.2 k</p>

                <p className='uppercase text-[#ADADBA] font-medium'>engagement</p>
              </div>
            </div>

            <button className='font-medium text-[#B33CDB] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
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
        </div>
      </div>

      <div className='grid grid-cols-1 grid-rows-[auto_auto] relative'>
        <img
          src={service3}
          alt='service1'
          className='w-full'
        />

        <div className='absolute bottom-[-6rem] left-0 grid grid-cols-[auto_2rem] grid-rows-1 gap-4 justify-items-start'>
          <div className='bg-white shadow-lg p-4 grid grid-cols-1 grid-rows-[auto_auto_auto] justify-items-start gap-4'>
            <p className='text-poppins font-semibold uppercase'>rebel clothing</p>

            <div className='grid grid-cols-2 grid-rows-1'>
              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>6.7 m</p>

                <p className='uppercase text-[#ADADBA] font-medium'>followers reach</p>
              </div>

              <div className='grid grid-cols-1 grid-rows-2'>
                <p className='uppercase font-semibold text-2xl text-[#1F1F26] self-center'>56.2 k</p>

                <p className='uppercase text-[#ADADBA] font-medium'>engagement</p>
              </div>
            </div>

            <button className='font-medium text-[#B33CDB] grid grid-cols-[auto_auto] grid-rows-1 items-center gap-2'>
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
        </div>
      </div>
    </div>
  </div>
)

export default Service
