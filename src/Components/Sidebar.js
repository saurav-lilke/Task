import React from "react";
import "./Styling.scss";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="one">
        <p className="react-test">React Test</p>
        <div className="line"></div>
      </div>
      <div className="two">
        <div className="dashboard">
          <Button variant="contained">Dashboard</Button>
        </div>
        <div className="montages">
          <Button variant="contained">Montages</Button>
        </div>
        <div className="credits">
          <Button variant="contained">Credits</Button>
        </div>
      </div>
      <div className="three">
        <div className="box">
          <div className="box-text">
            <div>1650</div>
            <div>Total Credits Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
