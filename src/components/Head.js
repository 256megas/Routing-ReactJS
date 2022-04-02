import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

class Head extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <img src={logo} alt="Logo" id="imageLogo" />
        </div>
        <nav>
          <ul>
            <li>
              {/* <a href="/#">Home</a> */}
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {/* <a href="/#">Our Menu</a> */}
              <NavLink to="/ourMenu">Our Menu</NavLink>
            </li>
            <li>
              {/* <a href="/#">Our Team</a> */}
              <NavLink to="/ourTeam">Our Team</NavLink>
            </li>
            <li>
              {/* <a href="/#">Reservation Form</a> */}
              <NavLink to="/reservationForm">Reservation Form</NavLink>
            </li>
          </ul>
        </nav>

        <div className="clear"></div>
      </header>
    );
  }
}
export default Head;
