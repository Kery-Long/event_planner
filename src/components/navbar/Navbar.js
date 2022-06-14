import "./Navbar.css";
import Temple from "../../assets/temple.svg";

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from '../../hooks/useLogout'

export default function () {
  const {logout, isPending} = useLogout()
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
            {!isPending && <button className='btn'onClick = {logout}>Logout</button>}
            {isPending && <button className='btn' disabled>Logging ou t</button>}
        </li>
      </ul>
    </div>
  );
}
