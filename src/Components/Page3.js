import React from "react";
import { Button } from "@mui/material";
import Footer from "../ResuableComponents/Footer";
import { useNavigate } from "react-router-dom";

const Page3 = ({ pageNumber, setPageNumber }) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    setPageNumber(2);
    navigate(`/page${2}`);
  };
  const onNextClick = () => {};
  return (
    <>
      <div className="page3">
        <div className="white-row c3-a2"></div>
        <div className="white-row c4-a1"></div>
        <div className="white-row eogl-a2"></div>
        <div className="white-row eogr-a1"></div>
        <div className="white-row emg"></div>
      </div>
      <Footer
        onBackClick={onBackClick}
        onNextClick={onNextClick}
        nextButtonLabel="Save"
      />
    </>
  );
};

export default Page3;
