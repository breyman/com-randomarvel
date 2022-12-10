import React from "react";

function Footer({ handlePageChange, usingLocalDataFile = false }) {
  let dataFileMessage = "";
  if (usingLocalDataFile) {
    console.log("here");
    dataFileMessage = (
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-marvel-500">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <p className="ml-3 truncate font-medium text-marvel-100">
                  <span className="md:hidden">Using local data.</span>
                  <span className="hidden md:inline">
                    The site is currently using a local version of the data file
                    as the API is unavailable. Some shows may not appear as a
                    result.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className=" bump-up-in bg-slate-100 pt-9 pb-12 text-center dark:bg-slate-900">
      <div className="px-6">
        <button title="media" onClick={handlePageChange}>
          Generate Random Marvel
        </button>

        <span className=" mx-3 text-gray-400">|</span>

        <button title="list" onClick={handlePageChange}>
          Marvel List
        </button>

        <span className="mx-3 text-gray-400">|</span>

        <button title="about" onClick={handlePageChange}>
          About
        </button>
      </div>
      <div className="mt-5">{dataFileMessage}</div>
    </footer>
  );
}
export default Footer;
