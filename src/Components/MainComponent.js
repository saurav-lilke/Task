import { Button } from "@mui/material";
import { React, useState } from "react";
import "./Styling.scss";
import { useNavigate } from "react-router-dom";
// import useNavigate from 'react-dom'
import BodyComponent from "./BodyComponent";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MainComponent = ({ pageNumber, setPageNumber }) => {
  const navigate = useNavigate();
  const onBackClick = () => {};

  const onNextClick = () => {};
  return (
    <>
      <div className="header">
        <div className="line1 d-flex">
          <div className="header-text">Test_Study</div>
          <div className="user-div">
            <span className="user-icon">
              <AccountCircle />
            </span>
            <span className="user-name">Sarika</span>
          </div>
        </div>

        <div className="stepper">
          <div className={`upload-edf-btn ${pageNumber === 1 ? "active" : ""}`}>
            <div class="numberCircle">
              <div className="number-span">1</div>
            </div>
            <div className="text">Upload EDFs</div>
          </div>
          <div className="line"></div>
          <div
            className={`map-channel-btn ${pageNumber === 2 ? "active" : ""}`}
          >
            <div class="numberCircle">
              <div className="number-span">2</div>
            </div>
            <div className="text">Map Channels</div>
          </div>
          <div className="line"></div>
          <div
            className={`save-preview-btn ${pageNumber === 3 ? "active" : ""}`}
          >
            <div class="numberCircle">
              <div className="number-span">3</div>
            </div>
            <div className="text">Save & Preview</div>
          </div>
        </div>
      </div>
      <div className="body">
        <BodyComponent
          onBackClick={onBackClick}
          onNextClick={onNextClick}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
};

export default MainComponent;

// function Home() {
//   return (
//     <div className="center-box">
//       <div className="browse-files-btn">
//         <Button>Browse Files</Button>
//       </div>
//     </div>
//   );
// }

// function Contacts() {
//   return (
//     <>
//       <h2>Contacts</h2>
//       <div className="center-box">
//         <div className="browse-files-btn">
//           <Button>Browse Files</Button>
//         </div>
//       </div>
//     </>
//   );
// }
