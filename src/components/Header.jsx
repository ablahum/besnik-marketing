const Header = () => (
  <div className='p-4 sticky top-0 z-10 bg-gradient-to-r from-[#e73635] to-[#6ad5ff]'>
    <div className='container mx-auto grid sm:grid-cols-[auto_auto_auto] max-[444px]:grid-cols-1 grid-cols-[auto_auto] grid-rows-1 justify-between text-white'>
      <h1 className='hidden sm:inline capitalize font-bold font-lekton text-3xl'>besnik.</h1>

      <ul className='capitalize grid grid-cols-[auto_auto_auto_auto] grid-rows-1 items-center gap-4'>
        <li>solution</li>
        <li>plans</li>
        <li>resource</li>
        <li>blog</li>
      </ul>

      <button className='max-[444px]:hidden text-white backdrop-blur-md bg-white/20 px-4 py-2 rounded-full font-medium capitalize'>request demon</button>
    </div>
  </div>
)

export default Header
