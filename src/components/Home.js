import React, { Component } from "react";
import Wellcome from "./Wellcome";
import OurMenu from "./OurMenu";
import OurTeam from "./OurTeam";
import ReservationForm from "./ReservationForm";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider />
        <Wellcome />
        <OurMenu />
        <OurTeam />
        <ReservationForm />
      </div>
    );
  }
}
export default Home;
