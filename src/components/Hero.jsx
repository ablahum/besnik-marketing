import hero from '../assets/hero.png'

const Hero = () => (
  <div className='h-[50vh] relative'>
    <div className='bg-gradient-to-r from-[#e73635] to-[#6ad5ff] h-[40vh]'></div>

    <div className='relative container mx-auto'>
      <div className='absolute bottom-[-22rem] grid grid-cols-2 grid-rows-[auto_auto_auto_auto]'>
        <div className='grid grid-cols-1 grid-rows-[auto_auto_auto] row-start-3 justify-items-start gap-4'>
          <h1 className='text-[#111439] font-bold text-8xl font-poppins'>
            <span className='capitalize'>tell </span>a better brand story
          </h1>

          <p className='text-[#425466]'>
            <span className='capitalize'>automate </span>the way you search through hashtags and suggested
            <br /> profiles to find results 100x faster.
          </p>

          <button className='bg-[#231A36] text-white px-6 py-3 rounded-full capitalize grid grid-cols-[auto_auto] grid-rows-1 gap-2'>
            request demo
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

        <div className='row-span-4'>
          <img
            src={hero}
            alt='hero'
            className='w-full'
          />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
