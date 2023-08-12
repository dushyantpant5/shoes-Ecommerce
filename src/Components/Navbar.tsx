import React from 'react'
import nikeLogo from "../img/nike_logo.png"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link,NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between " >
        <Link to="/"> <img src={nikeLogo} alt="" height={100} width={100} /></Link>
        <div className='flex items-center justify-between gap-4' >
            
            <NavLink  className={({isActive})=>
                isActive?"active":"hover:scale-110"
            } to="/men">
              Men
            </NavLink>
            
            <NavLink  className={({isActive})=>
                isActive?"active":"hover:scale-110"
                  } to="/women">
              Women
            </NavLink>

            <NavLink  className={({isActive})=>
                isActive?"active":"hover:scale-110"
                  } to="/kids">
              Kids
            </NavLink>

           
        </div>
       <Link to="/cart"> <ShoppingBagIcon style={{fontSize: 30}} /> </Link>
    </div>
  )
}

export default Navbar