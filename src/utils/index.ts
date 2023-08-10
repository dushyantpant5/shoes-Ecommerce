import React, { useContext } from "react";
import { CartState, ICartItems, ICartState } from "../context/CartContext";
import ShoesContext from "../context/ShoesContext";



const CartFunctions = (id: string) => {
  
  const menShoesList:any = useContext(ShoesContext)['men-shoes']
  
  const { cartItems, setCartItems } = useContext(CartState) as ICartState;

  const addItemToCart = (id:string) => {
    
    const foundItem = cartItems.find((item)=>item.id === id)
    if(foundItem)
    {
      const newItem = {
        id: id,
        name:menShoesList.id,
        price: menShoesList.price,
        img: menShoesList.price,
        noOfItems:menShoesList.noOfItems+1
      };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
    }
    
    else
    {
      const newItem = {
        id: id,
        name:menShoesList.id,
        price: menShoesList.price,
        img: menShoesList.price,
        noOfItems:1
      };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
    }
    
    
    
  };




  return null; 
};

export default CartFunctions;