import React, { useContext } from 'react'
import ShoesContext from '../context/ShoesContext'
import ShoeCard from '../Components/ShoeCard'


const Women:React.FC = () => {
  
  const womenShoesList = useContext(ShoesContext)['women-shoes']

  console.log(womenShoesList)

  return (
    <div >
      
      <div className='flex flex-3 justify-around items-center p-7 flex-wrap gap-20 bg-slate-200  ' >

        {Object.entries(womenShoesList).map(([id,e])=>
        {
          return <ShoeCard key={id} name={e.name} price={e.price} itemsLeft={e.itemsLeft} img={e.img} />
          
        })}
      </div>

    </div>
  )
}

export default Women