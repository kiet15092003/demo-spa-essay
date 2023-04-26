import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import {FaCartPlus} from 'react-icons/fa'

function Navbar() {
  return (
      <div className='navbar'>
        <div className='leftNav'>
            <img src={logo}></img>
        </div>
        <div className='rightNav'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="cart"><FaCartPlus size='30px' color='#6A6A6A'/></Link>
        </div>
      </div>
    
  )
}

export default Navbar