import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OurMenu from "./components/OurMenu";
import OurTeam from "./components/OurTeam";
import ReservationForm from "./components/ReservationForm";

import Head from "./components/Head";
import Foot from "./components/Foot";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourMenu" element={<OurMenu />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/reservationForm" element={<ReservationForm />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    );
  }
}
export default Router;
