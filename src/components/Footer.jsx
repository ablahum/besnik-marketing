import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'

const Footer = () => (
  <div className='container mx-auto p-4 grid sm:grid-cols-[auto_auto_auto] max-[425px]:grid-cols-1 max-[425px]:grid-rows-2 grid-cols-[auto_auto] grid-rows-1 justify-between gap-4'>
    <h1 className='sm:inline hidden capitalize font-bold font-lekton text-3xl'>besnik.</h1>

    <ul className='capitalize grid grid-cols-[auto_auto_auto_auto] grid-rows-1 items-center gap-4 justify-center'>
      <li>solution</li>
      <li>plans</li>
      <li>resource</li>
      <li>blog</li>
    </ul>

    <div className='grid grid-cols-[auto_auto_auto] grid-rows-1 gap-4 items-center max-[425px]:order-[-1] justify-center'>
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
