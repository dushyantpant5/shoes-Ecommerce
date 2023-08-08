import React, { useContext } from 'react'
import ShoesContext from '../context/ShoesContext'
import ShoeCard from '../Components/ShoeCard'


const Mens:React.FC = () => {
  
  const menShoesList = useContext(ShoesContext)['men-shoes']

  return (
    <div >
      
      <div className='flex flex-3 justify-around items-center p-7 flex-wrap gap-20 bg-slate-200 rounded-lg ' >

        {Object.entries(menShoesList).map(([id,e])=>
        {
          return <ShoeCard key={id} name={e.name} price={e.price} itemsLeft={e.itemsLeft} img={e.img} />
          
        })}
      </div>

    </div>
  )
}

export default Mens