import React from "react";
import MainComponent from "./MainComponent.js";
import Sidebar from "./Sidebar.js";
import "./Styling.scss";

const Dashboard = ({ props }) => {
  return (
    <>
      <div className="sidebar-component">
        <Sidebar />
      </div>
      <div className="main-component">
        <MainComponent />
      </div>
    </>
  );
};

export default Dashboard;
