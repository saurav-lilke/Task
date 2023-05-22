import React from "react";
import { Button } from "@mui/material";

const Footer = ({
  onBackClick,
  onNextClick,
  backButtonDisabled = false,
  nextButtonDisabled = false,
  nextButtonLabel = "Next",
}) => {
  return (
    <div className="footer">
      <div className="back-btn">
        <Button
          className="back-button"
          variant={"contained"}
          onClick={onBackClick}
          disabled={backButtonDisabled}
        >
          Back
        </Button>
      </div>
      <div className="next-btn">
        <Button
          className="dshfbsdkh"
          variant={"contained"}
          onClick={onNextClick}
          disabled={nextButtonDisabled}
        >
          {nextButtonLabel}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
