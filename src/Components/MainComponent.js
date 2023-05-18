import { Button } from "@mui/material";
import React from "react";
import "./Styling.scss";

const MainComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header-text">Test_Study</div>
        <div className="stepper">
          <div className="upload-edf-btn">
            <Button variant={"contained"}>Upload EDFs</Button>
          </div>
          <div className="map-channel-btn">
            <Button variant={"contained"}>Map Channels</Button>
          </div>
          <div className="save-preview-btn">
            <Button variant={"contained"}>Save & Preview</Button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="center-box">
          <div className="browse-files-btn">
            <Button>Browse Files</Button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="back-btn">
          <Button variant={"contained"}>Back</Button>
        </div>
        <div className="next-btn">
          <Button variant={"contained"}> Next</Button>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
