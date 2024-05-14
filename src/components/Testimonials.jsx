import profile from '../assets/profile.png'
import person from '../assets/person.png'

const Testimonials = () => (
  <div className='container mx-auto py-20 grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
    <div className='grid grid-cols-1 grid-rows-2 items-center justify-items-center text-center gap-4'>
      <h3 className='text-poppins font-semibold text-4xl capitalize'>happy clients</h3>

      <p className='text-paragraph'>
        <span className='capitalize'>the marketing accountability standards boards </span>
        <span className='uppercase'>(masb) </span>endorses the <br className='md:inline hidden' />
        definitions, purposes, and constructs of classes
      </p>
    </div>

    <div className='grid md:grid-cols-5 md:grid-rows-[auto_auto_auto] gap-8 md:mx-0 mx-12'>
      <div className='row-start-2 md:col-span-3 grid grid-cols-1 grid-rows-[auto_auto_auto] gap-4'>
        <img
          src={profile}
          alt='profile'
        />

        <p className='italic text-xl font-medium'>
          <span className='capitalize'>not </span>weekly or monthly like other sites out there. <span className='capitalize'>this </span>ensures that we offer prospective homebuyers and a with the freshest- hottest deals on the Internet.
        </p>

        <div className='grid grid-cols-[auto_auto] grid-rows-1'>
          <div className='grid grid-cols-1 grid-rows-[auto_auto] gap-2'>
            <p className='capitalize font-bold text-poppins text-2xl'>rowhan smith</p>

            <p className='capitalize font-medium text-[#9C988F]'>
              <span className='uppercase'>ceo, </span>foreclosure
            </p>
          </div>

          <div className='grid grid-cols-[auto_auto] grid-rows-1 justify-end gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8'
            >
              <path
                fillRule='evenodd'
                d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
                clipRule='evenodd'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='md:col-span-2 md:row-span-3'>
        <img
          src={person}
          alt='person'
          className='w-full'
        />
      </div>
    </div>
  </div>
)

export default Testimonials
