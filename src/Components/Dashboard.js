import { React, useState } from "react";
import MainComponent from "./MainComponent.js";
import Sidebar from "./Sidebar.js";
import "./Styling.scss";

const Dashboard = ({ props }) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <div className="sidebar-component">
        <Sidebar pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
      <div className="main-component">
        <MainComponent pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};

export default Dashboard;
