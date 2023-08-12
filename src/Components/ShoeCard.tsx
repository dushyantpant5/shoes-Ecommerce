import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface IShoeData{
    id:string;
    name: string;
    price: number;
    img: string;
    noOfItems?:number
    handleClick:(id:string)=> void;
}




const ShoeCard: React.FC<IShoeData> = ({id,name,price,img,handleClick}) => {

    const handleButton = (id:string) =>{handleClick(id)}
  
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
                    MRP : ₹{price}
                </span>
           </div>
           <button onClick={()=>handleButton(id)} className='pr-5'> <ShoppingBagIcon style={{fontSize: 20}} /> </button>
        </div>
    </div>
  )
}

export default ShoeCard