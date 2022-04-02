import React, { Component } from "react";
import logo from "../assets/images/logo.png";

class Foot extends Component {
  render() {
    return (
      <div>
        <div id="logoFoot">
          <hr/>
          <img src={logo} alt="Logo" id="imageLogo" />
        </div>
      </div>
    );
  }
}
export default Foot;
