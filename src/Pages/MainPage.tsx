import React from 'react'

const MainPage = () => {
  return (
    <div className='mainPage h-full flex items-end '>
      <div className='text-white mb-28 ml-16 flex flex-col items-start gap-6 ' >
        
        <div className='font-bold text-5xl '>
        GIVE YOUR
        <br />
        FEET A HUG
        </div>
        
        <span className='text-xl' >
          Whatever your "why" is for working out,<br/> 
          the Metcon 9 makes it all worth it. 
        </span>

        <a href="/" className='bg-white text-black px-5 py-2 flex items-center justify-center rounded-full' >
          <button>Shop</button>
        </a>

      </div>
    </div>
  )
}

export default MainPage