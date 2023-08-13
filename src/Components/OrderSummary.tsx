import React, { useContext } from 'react'
import { CartState } from '../context/CartContext'

const OrderSummary = () => {
    
    const {price} = useContext(CartState)

    const handlePlaceOrder = async () => {
        
        const pricePayload = {
            price:price ? price>=10000?(price-(price*0.15)):price:0
        }

        const response = await fetch(`api/stripe/create-checkout-session`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(pricePayload)
          });

        if(response)
        {
            const data = await response.json()
            const url = data.url;

            window.location.href = url;
        }
    }

    return (
    <div className= 'flex flex-col gap-5 items-start p-4 ' >
        <h1 className='text-3xl' >Order Summary</h1>
        <div className='flex justify-between items-center gap-10' >
            <span>Total MRP</span>
            <span>₹{price}</span>
        </div>
        <div className='flex justify-between items-center gap-10 border-b-2 border-gray-500 pb-4 ' >
            <span>Discount on MRP</span>
            <span>₹{ price ? price>=10000?price*0.15:0  :0  }</span>
        </div>

        <div className='flex justify-between items-center gap-10' >
            <span className='text-xl' >Total Amount</span>
            <span className='text-xl' >₹{price ? price>=10000?(price-(price*0.15)):price:0   }</span>
        </div>

        <button onClick={()=>handlePlaceOrder()} className='bg-gray-500 w-full p-4 rounded-sm ' >Place Order</button>

    </div>
  )
}

export default OrderSummary