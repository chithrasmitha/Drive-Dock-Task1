import React from 'react';
import './Nav1.css';
import {Link} from 'react-router-dom';

function Nav1(){
  const navStyle={
    color:'white'
  }


  return(
    
    <nav>
      <div>
      <div>
         <ul className="topnav">
        <li><h3>BIKZPARTS</h3></li>
      <li><input type="text" placeholder="Search..." /></li>
      <li>        <Link style={navStyle} to="/signup">
        <li>Login/SignUp</li>
        </Link></li>
      </ul>
      </div>
      <div>
      <ul className="topnav">
        <Link style={navStyle} to="/home">
        <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
        <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
        <li>Shop Us</li>
        </Link>
        <Link style={navStyle}>
        <li>Size-Chart</li>
        </Link>
        <Link style={navStyle}>
        <li>New-Bikes</li>
        </Link>
        <Link style={navStyle}>
        <li>Old-Bikes</li>
        </Link>
        <Link style={navStyle}>
        <li>Blog</li>
        </Link>
        <Link style={navStyle}>
        <li>Contact Us</li>
        </Link>
      </ul>
      </div>
      </div>
      
      
    </nav>
  )
}

export default Nav1;