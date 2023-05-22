import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function BodyComponent({
  onBackClick,
  onNextClick,
  pageNumber,
  setPageNumber,
}) {
  return (
    <div>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Page1 pageNumber={pageNumber} setPageNumber={setPageNumber} />
            }
          />
          <Route
            exact
            path="/page1"
            element={
              <Page1 pageNumber={pageNumber} setPageNumber={setPageNumber} />
            }
          />
          <Route
            exact
            path="/page2"
            element={
              <Page2 pageNumber={pageNumber} setPageNumber={setPageNumber} />
            }
          />
          <Route
            exact
            path="/page3"
            element={
              <Page3 pageNumber={pageNumber} setPageNumber={setPageNumber} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
