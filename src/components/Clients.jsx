import asana from '../assets/asana.png'
import buzzfeed from '../assets/buzzfeed.png'
import chase from '../assets/chase.png'
import google from '../assets/google.png'
import toggl from '../assets/toggl.png'
import walmart from '../assets/walmart.png'

const Clients = () => (
  <div className='container mx-auto py-20 grid grid-cols-1 grid-rows-[auto_auto] text-center gap-4'>
    <p className='uppercase text-muted font-bold'>some of our trusted clients</p>

    <div className='grid sm:grid-cols-[auto_auto_auto_auto_auto_auto] sm:grid-rows-1 grid-cols-1 grid-rows-5 items-center sm:gap-8 gap-4 justify-between justify-items-stretch mx-auto sm:mx-0'>
      <img
        src={chase}
        alt='chase'
      />
      <img
        src={asana}
        alt='asana'
      />
      <img
        src={google}
        alt='google'
      />
      <img
        src={buzzfeed}
        alt='buzzfeed'
      />
      <img
        src={toggl}
        alt='toogl'
      />
      <img
        src={walmart}
        alt='walmart'
      />
    </div>
  </div>
)

export default Clients
