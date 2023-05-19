import React from "react";
import "./Styling.scss";
// import { Button } from "@mui/material";

import Dashboard from "@mui/icons-material/Dashboard";
import MonitorHeart from "@mui/icons-material/MonitorHeart";
import MonetizationOn from "@mui/icons-material/MonetizationOn";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="one">
        <div className="react-test">React Test</div>
        <div className="line"></div>
      </div>
      <div className="two">
        <div className="dashboard">
          <span className="dashbord-icon">
            <Dashboard />
          </span>
          <span variant="contained">Dashboard</span>
        </div>
        <div className="montages">
          <span className="montages-icon">
            <MonitorHeart />
          </span>
          <span variant="contained">Montages</span>
        </div>
        <div className="credits">
          <span className="credits-icon">
            <MonetizationOn />
          </span>
          <span variant="contained">Credits</span>
        </div>
      </div>
      <div className="three">
        <div className="box">
          <div className="box-text">
            <div className="number">1650</div>
            <div className="total-credits-available">
              Total Credits Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
