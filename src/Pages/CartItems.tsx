import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartState, ICartState } from '../context/CartContext';

interface ICartItems{
    id:string;
    name:string;
    price:number;
    img:string;
    noOfItems?:number
}

const CartItems:React.FC<ICartItems> = ({id,name,price,img,noOfItems}) => {
  
  const {cartItems,setCartItems} = useContext(CartState) as ICartState;

  const handleDelete = ()=>{
    if(noOfItems)
    {
      if(noOfItems>=2)
      {
        const updatedCartItems = cartItems.map(item =>
          item.id === id ? { ...item, noOfItems: item.noOfItems ? item.noOfItems - 1 : 1 } : item
        );
        setCartItems(updatedCartItems);
      }
      else
      {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
      }
    }
  }
  
  return (
    <div className='flex justify-between w-9/12 items-center p-4 bg-slate-200 ' >
        <img src={img} height={80} width={80} alt="" />
        <span>{name}</span>
        <span>{`₹${price} x ${noOfItems}`}</span>
        <div className='flex gap-20' >
            <span>{`₹${ noOfItems?price*noOfItems:price}`}</span>
            <button onClick={handleDelete} > <DeleteIcon style={{color:"#bb0000"}} /></button>
        </div>
    </div>
  )
}

export default CartItems