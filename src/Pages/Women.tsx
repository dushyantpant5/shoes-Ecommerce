import React, { useContext } from 'react'
import ShoesContext from '../context/ShoesContext'
import ShoeCard from '../Components/ShoeCard'
import { CartState, ICartState } from '../context/CartContext'


const Women:React.FC = () => {
  
  const womenShoesList:any = useContext(ShoesContext)['women-shoes']

  const {setCartItems,cartItems} = useContext(CartState) as ICartState;

  const handleClick = (id:string)=>{
    const foundItem = cartItems.find((item)=>item.id === id)
    if(foundItem)
    {
      const updatedCartItems = cartItems.map(item =>
        item.id === id ? { ...item, noOfItems: item.noOfItems ? item.noOfItems + 1 : 1 } : item
      );
      setCartItems(updatedCartItems);
    }
    
    else
    {
      const newItem = {
        id: id,
        name:womenShoesList[id].name,
        price: womenShoesList[id].price,
        img: womenShoesList[id].img,
        noOfItems:1
      };

      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
    }
  }
  

  return (
    <div >
      
      <div className='flex flex-3 justify-around items-center p-7 flex-wrap gap-20 bg-slate-200  ' >

        {Object.entries(womenShoesList).map(([id,e]:any)=>
        {
          return <ShoeCard key={id} id={id} name={e.name} price={e.price} img={e.img} handleClick={handleClick} />
          
        })}
      </div>

    </div>
  )
}

export default Women