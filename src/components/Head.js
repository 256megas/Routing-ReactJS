import React, { Component } from "react";
import logo from "../assets/images/logo.png";

class Head extends Component {
  render() {
    return (
      <header>
        <div id="logo">
          <img src={logo} alt="Logo" id="imageLogo" />
        </div>
        <nav>
       <ul>
         <li><a href="/#">Home</a></li>
         <li><a href="/#">Our Menu</a></li>
         <li><a href="/#">Our Team</a></li>
         <li><a href="/#">Reservation Form</a></li>
       </ul>
     </nav>

        <div className="clear"></div>
      </header>
    );
  }
}
export default Head;
