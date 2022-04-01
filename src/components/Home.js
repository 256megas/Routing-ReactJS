import React, { Component } from "react";
import Wellcome from "./Wellcome";
import OurMenu from "./OurMenu";
import OurTeam from "./OurTeam";
import ReservationForm from "./ReservationForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Wellcome />
        <OurMenu />
        <OurTeam />
        <ReservationForm />
      </div>
    );
  }
}
export default Home;
