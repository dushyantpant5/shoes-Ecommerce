import React from 'react'
import { useContext } from 'react'
import { CartState } from '../context/CartContext'

const Cart = () => {
  
  const {price} = useContext(CartState)
  
  return (
    <div>
      <h1 className='text-7xl' >Cart</h1><br />
      <h1 className='text-7xl' >{price}</h1>
    </div>
  )
}

export default Cart