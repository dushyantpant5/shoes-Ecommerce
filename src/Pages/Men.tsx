import React, { useContext } from 'react'
import ShoesContext from '../context/ShoesContext'
import ShoeCard from '../Components/ShoeCard'
import { CartState,ICartState } from '../context/CartContext'

const Mens:React.FC = () => {
  
  const menShoesList:any = useContext(ShoesContext)['men-shoes']

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
        name:menShoesList[id].name,
        price: menShoesList[id].price*82,
        img: menShoesList[id].img,
        noOfItems:1
      };

      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
    }
  }
  
  return (
    <div >
      
      <div className='flex flex-3 justify-around items-center p-7 flex-wrap gap-20 bg-slate-200 rounded-lg ' >

        {Object.entries(menShoesList).map(([id,e]:any)=>
        {
          return <ShoeCard key={id} id={id} name={e.name} price={e.price} img={e.img} handleClick={handleClick} />
          
        })}
      </div>

    </div>
  )
}

export default Mens