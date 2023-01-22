import React, { Fragment,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../UI/Cart/Cart'
import cartContext from '../../Store/Context'
import './NavBar.css'


const NavBar = () => {
    const ctx=useContext(cartContext);
const {items}=ctx;
   

    // const logoutHandler=()=>{
    //     ctx.logout();
    // }

     const numberOfItems=items.length;
    //  ((curr,item)=>(curr)+ Number(item.quantity)
    // ,0);

  return (
   <Fragment>
    <div className='nav-main-div'>
        <div className='nav-sub-div'>
        <NavLink className='nav-sub' to='/'>Home</NavLink>
        <NavLink className='nav-sub' to='/store'>Store</NavLink>
        <NavLink className='nav-sub' to='/about'>About</NavLink>
        <NavLink className='nav-sub' to='/contact'>Contact</NavLink>
        <NavLink className='nav-sub' to='/login'>
            <button type="button" className="btn btn-primary login-btn btn-lg">Login</button>
        </NavLink>
        <NavLink to='/cart'>
            <button type="button" className="btn btn-primary cart-btn btn-lg"><Cart /></button>
        </NavLink>
        <p className='cart-item-no'>  {numberOfItems}</p>
        </div>
    </div>
   </Fragment>
  )
}

export default NavBar;
 