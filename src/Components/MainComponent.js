import { Button } from "@mui/material";
import { React, useState } from "react";
import "./Styling.scss";
import { useNavigate } from "react-router-dom";
// import useNavigate from 'react-dom'
import BodyComponent from "../routes";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MainComponent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const onBackClick = () => {
    if (pageNumber > 1) {
      navigate(`/page${pageNumber - 1}`);
      setPageNumber(pageNumber - 1);
    }
  };

  const onNextClick = () => {
    if (pageNumber < 5) {
      navigate(`/page${pageNumber + 1}`);
      setPageNumber(pageNumber + 1);
    }
  };
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
          <div className="upload-edf-btn">
            <div class="numberCircle">
              <div className="number-span">1</div>
            </div>
            <div variant={"contained"}>Upload EDFs</div>
          </div>
          <div className="line"></div>
          <div className="map-channel-btn">
            <div class="numberCircle">
              <div className="number-span">2</div>
            </div>
            <div variant={"contained"}>Map Channels</div>
          </div>
          <div className="line"></div>
          <div className="save-preview-btn">
            <div class="numberCircle">
              <div className="number-span">3</div>
            </div>
            <div variant={"contained"}>Save & Preview</div>
          </div>
        </div>
      </div>
      <div className="body">
        <BodyComponent />
      </div>
      <div className="footer">
        <div className="back-btn">
          <Button
            className="back-button"
            variant={"contained"}
            onClick={onBackClick}
          >
            Back
          </Button>
        </div>
        <div className="next-btn">
          <Button
            className="dshfbsdkh"
            variant={"contained"}
            onClick={onNextClick}
          >
            Next
          </Button>
        </div>
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
