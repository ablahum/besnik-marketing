import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'

const Footer = () => (
  <div className='container mx-auto py-8 grid grid-cols-[auto_auto_auto] grid-rows-1 justify-between'>
    <h1 className='capitalize font-bold font-lekton text-3xl'>besnik.</h1>

    <ul className='capitalize grid grid-cols-[auto_auto_auto_auto] grid-rows-1 items-center'>
      <li className='me-4'>solution</li>
      <li className='me-4'>plans</li>
      <li className='me-4'>resource</li>
      <li>blog</li>
    </ul>

    <div className='grid grid-cols-3 grid-rows-1 gap-4 items-center'>
      <img
        src={facebook}
        alt='facebook'
      />

      <img
        src={instagram}
        alt='instagram'
      />

      <img
        src={youtube}
        alt='youtube'
      />
    </div>
  </div>
)

export default Footer
