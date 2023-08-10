import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

export interface ICartItems{
  id:string;
  name: string;
  price: number;
  img: string;
  noOfItems?:number
}
export interface ICartState{
    price:number;
    setPrice:Dispatch<SetStateAction<number>>
    cartItems:Array<ICartItems>;
    setCartItems:Dispatch<React.SetStateAction<Array<ICartItems>>>
}

export const CartState = createContext<Partial<ICartState>>({});

type TUserProvidedProps = {
    children:ReactNode;
}

const CartContext = ({children}:TUserProvidedProps) => {
  
  const [price,setPrice] = useState(0)
  const [cartItems,setCartItems] = useState<ICartItems[]>([]); 
  
  return (
    <CartState.Provider value={{price,setPrice,cartItems,setCartItems}} >
        {children}
    </CartState.Provider>
  )
}

export default CartContext