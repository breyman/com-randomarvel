import React from "react";

function Footer({ handlePageChange, usingLocalDataFile = false }) {
  let dataFileMessage = "";
  if (usingLocalDataFile) {
    dataFileMessage = (
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-info">local data</span>
          <span className="tag is-warning">true</span>
        </div>
      </div>
    );
  }

  return (
    <footer className="bg-slate-100 py-9 mt-10">
      <div className="column is-full is-centered has-text-centered">
        <button
          className="is-link has-text-primary is-size-7"
          title="media"
          onClick={handlePageChange}
        >
          Generate Random Marvel
        </button>

        <span className="has-text-grey ml-3 mr-3">|</span>
        <span>
          <button
            className="is-link has-text-primary is-size-7"
            title="list"
            onClick={handlePageChange}
          >
            Marvel List
          </button>
        </span>
        <span className="has-text-grey ml-3 mr-3">|</span>
        <span>
          <button
            className="is-link has-text-primary is-size-7"
            title="about"
            onClick={handlePageChange}
          >
            About
          </button>
        </span>
      </div>
      {dataFileMessage}
    </footer>
  );
}
export default Footer;
