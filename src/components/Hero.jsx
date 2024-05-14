import hero from '../assets/hero.png'

const Hero = () => (
  <div className='bg-gradient-to-r from-[#e73635] to-[#6ad5ff] h-[50vh]'>
    <div className='container mx-auto grid lg:grid-cols-[auto_auto] grid-cols-1 grid-rows-1 items-center h-[50vh]'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto] lg:justify-items-start justify-items-center items-center lg:text-start text-center gap-4'>
        <h1 className='text-[#111439] font-bold sm:text-8xl min-[375px]:text-6xl text-3xl font-poppins'>
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

      <div className='hidden lg:inline'>
        <img
          src={hero}
          alt='hero'
        />
      </div>
    </div>
  </div>
)

export default Hero
