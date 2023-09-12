import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='nav'>
           <ul>
            <NavLink to={"/Home"} className="link"><li>Home</li></NavLink>
            <NavLink to={"/student"} className="link"><li>Students</li></NavLink>
            <NavLink to={"/contact"} className="link"><li>Contact Us</li></NavLink>  
           </ul>
        </div>
    </>
  )
}

export default Navbar