import React from "react";
import LibraryBooksSharp from "@mui/icons-material/LibraryBooksSharp";
import Footer from "../ResuableComponents/Footer";
import { useNavigate } from "react-router-dom";

const Page1 = ({ pageNumber, setPageNumber }) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    // navigate(`/page${pageNumber - 1}`);
  };
  const onNextClick = () => {
    setPageNumber(2);
    navigate(`/page${2}`);
  };
  return (
    <>
      <div className="page1">
        <div className="center-box">
          <h2>Page 1</h2>
          <div className="browse-files-div">
            <div className="browse-files-icon">
              <LibraryBooksSharp fontSize="200" />
            </div>
            <div className="browse-files-text">Browse Files</div>
            <div className="browse-files-sub-text">or drop files here</div>
          </div>
        </div>
      </div>
      <Footer
        onBackClick={onBackClick}
        onNextClick={onNextClick}
        backButtonDisabled={true}
      />
    </>
  );
};

export default Page1;
