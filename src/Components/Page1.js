import React from "react";
import { Button } from "@mui/material";
import LibraryBooksSharp from "@mui/icons-material/LibraryBooksSharp";

const Page1 = () => {
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
    </>
  );
};

export default Page1;
