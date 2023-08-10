import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartState, ICartState } from '../context/CartContext'
import CartItems from '../Components/CartItems'
import OrderSummary from '../Components/OrderSummary'

const Cart = () => {

  const { price, setPrice, cartItems } = useContext(CartState) as ICartState;

  useEffect(() => {
    let newPrice = 0;
    cartItems?.map((i) => {
      if (i.noOfItems) {
        newPrice += i.noOfItems * i.price;
      }
      else {
        newPrice += i.price
      }
      return null;
    })

    setPrice(newPrice)

  }, [cartItems])

  console.log(cartItems.length)

  return (
    <div>
      <h1 className='text-7xl' >Cart</h1><br />

      {

        
        cartItems.length!==0?<div className='flex ' >
          
          <div className='flex-1 flex-col ' >

            {
              cartItems?.map((e) => {
                return <CartItems key={e.id} id={e.id} name={e.name} noOfItems={e.noOfItems} img={e.img} price={e.price} />
              })
            }
          </div>

          <div>
            <OrderSummary />
          </div>

        </div>
        :
        <div>
          <h1>Empty Cart </h1>
        </div>

      }



    </div>
  )
}

export default Cart