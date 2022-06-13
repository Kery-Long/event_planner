import "./Navbar.css";
import Temple from "../../assets/temple.svg";

import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
            <img src= {Temple} alt= 'logo' />
            <span> Events Managemeent</span>
        </li>
        <li>
            <Link to='/login'> Login</Link>
        </li>

        <li>
            <Link to='/signup'> Signup</Link>           
        </li>

        <li>
            <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
}
