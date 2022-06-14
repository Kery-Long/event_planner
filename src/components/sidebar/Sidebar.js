import "./sidebar.css";

import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";

import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user"></div>
        <p>Hey User :)</p>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="Home icon" />
                <span> Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="create event icon" />
                <span> Create a New Event</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
