import React,  { useState, useRef } from 'react';
import logo from '../assets/img/logo.jpg';
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../assets/css/App.css'

const Header = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
  return (
      <div className="headerClass">
    <span className="headerText"> <Link to="/"> <img className="logo" src={logo} alt="Logo" height={50} width={50}/> </Link>  Rest Inn </span>
    

    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>User</span>
        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/Login">Log In</Link></li>
          
        </ul>
      </nav>

    </div>
    <Link className="navLink" to="/Property" >Properties</Link> 
    <span className="searchBar"><input type="text" placeholder="Start your search..."/><FaSearch/> </span>
    
    </div>
    

  )
}

export default Header