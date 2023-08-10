import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartState, ICartState } from '../context/CartContext'
import CartItems from './CartItems'

const Cart = () => {
  
  const {price,setPrice,cartItems} = useContext(CartState) as ICartState;

  useEffect(()=>{
    let newPrice = 0;
    cartItems?.map((i)=>{
      if(i.noOfItems)
      {
        newPrice += i.noOfItems*i.price;
      }
      else
      {
        newPrice += i.price
      }
    })

    setPrice(newPrice)

  },[cartItems])
  
  return (
    <div>
      <h1 className='text-7xl' >Cart</h1><br />
      <h1 className='text-7xl' >{price}</h1>

      <div className='flex flex-col gap-4 ' >

        {
          cartItems?.map((e)=>{
            return <CartItems id={e.id} name={e.name} noOfItems={e.noOfItems} img={e.img} price={e.price} />
          })
        }

      </div>

    </div>
  )
}

export default Cart