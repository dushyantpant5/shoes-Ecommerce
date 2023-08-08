import React, { useContext } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartState,ICartState } from '../context/CartContext';

interface IShoeData{
    name: string;
    price: number;
    itemsLeft: number;
    img: string;
}


const dollarToIndianValue = 82;

const ShoeCard: React.FC<IShoeData> = ({name,price,itemsLeft,img}) => {
    
    const {setPrice }: ICartState = useContext(CartState) as ICartState;

    const handleClick = () =>{
        setPrice((existingPrice)=>{
            return existingPrice+(price*dollarToIndianValue)
        })
    }
  
    return (
    <div className='flex flex-col items-start bg-slate-300 rounded-lg hover:scale-105 delay-100 ' >
        <div >
            <img className='shoeCard rounded-t-lg' src={img} alt="" />
        </div>
        <div className='flex items-center justify-between p-3 w-full ' >
           <div className='flex flex-col' >
                <span className='font-bold' >
                    {name}
                </span>
                <span>
                    In Stock:{itemsLeft}
                </span>
                <span>
                    MRP : ₹{price*dollarToIndianValue}
                </span>
           </div>
           <button  onClick={()=>handleClick()} className='pr-5'> <ShoppingBagIcon style={{fontSize: 20}} /> </button>
        </div>
    </div>
  )
}

export default ShoeCard