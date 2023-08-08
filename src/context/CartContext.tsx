import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

export interface ICartState{
    price:number;
    setPrice:Dispatch<SetStateAction<number>>
}

export const CartState = createContext<Partial<ICartState>>({});

type TUserProvidedProps = {
    children:ReactNode;
}

const CartContext = ({children}:TUserProvidedProps) => {
  
  const [price,setPrice] = useState(0)
  
  return (
    <CartState.Provider value={{price,setPrice}} >
        {children}
    </CartState.Provider>
  )
}

export default CartContext