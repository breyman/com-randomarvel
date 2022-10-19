import React from "react";

function MediaList({ media = [] }) {
  // set intial variables and some state
  let passedMedia = media;
  let sortedMedia = [];

  // start page by showing the list chronologically
  const [order, setOrder] = React.useState("chrono");

  if (order === "chrono") {
    sortedMedia = passedMedia.sort((a, b) =>
      a.chronological_order > b.chronological_order
        ? 1
        : b.chronological_order > a.chronological_order
        ? -1
        : 0
    );
  }
  if (order === "release") {
    sortedMedia = passedMedia.sort((a, b) =>
      a.release_order > b.release_order
        ? 1
        : b.release_order > a.release_order
        ? -1
        : 0
    );
  }

  // generate the appropriate media selection button styles
  const leftButtonClasses = [
    "relative",
    "inline-flex",
    "items-center",
    "rounded-l-md",
    "border",
    order === "chrono" ? "border-gray-500" : "border-gray-300",
    order === "chrono" ? "bg-gray-500" : "bg-white",
    "px-4",
    "py-2",
    "text-xs",
    "font-librefranklin",
    "font-medium",
    order === "chrono" ? "text-white" : "text-gray-700",
    order === "chrono" ? "hover:bg-gray-600" : "hover:bg-gray-50",
    "focus:z-10",
    "focus:border-marvel-500",
    "focus:outline-none",
    "focus:ring-1",
    "focus:ring-marvel-500",
  ].join(" ");

  const rightButtonClasses = [
    "relative",
    "-ml-px",
    "inline-flex",
    "items-center",
    "rounded-r-md",
    "border",
    order === "release" ? "border-gray-500" : "border-gray-300",
    order === "release" ? "bg-gray-500" : "bg-white",
    "px-4",
    "py-2",
    "text-xs",
    "font-librefranklin",
    "font-medium",
    order === "release" ? "text-white" : "text-gray-700",
    order === "release" ? "hover:bg-gray-600" : "hover:bg-gray-50",
    "focus:z-10",
    "focus:border-marvel-500",
    "focus:outline-none",
    "focus:ring-1",
    "focus:ring-marvel-500",
  ].join(" ");

  return (
    <>
      <div className="flex flex-col">
        <h2 className="mb-10 self-center font-librefranklin text-3xl font-bold text-marvel-500">
          Marvel Movies and TV Shows
        </h2>

        <div className=" self-center">
          <span className="isolate inline-flex rounded-md shadow-sm">
            <button
              type="button"
              title="timeline"
              data-testid="toggle-selector-timeline"
              onClick={() => {
                setOrder("chrono");
              }}
              className={leftButtonClasses}
            >
              By Timeline
            </button>
            <button
              type="button"
              title="release"
              data-testid="toggle-selector-release"
              onClick={() => {
                setOrder("release");
              }}
              className={rightButtonClasses}
            >
              By Release
            </button>
          </span>
        </div>

        <div className=" max-w-3xl self-center px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        title="title"
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left font-librefranklin text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                      ></th>
                      <th
                        scope="col"
                        title="chrono"
                        className="py-3.5 px-3 text-left font-librefranklin text-sm font-semibold text-gray-900"
                      >
                        Timeline
                      </th>
                      <th
                        scope="col"
                        title="release"
                        className="py-3.5 px-3 text-left font-librefranklin text-sm font-semibold text-gray-900"
                      >
                        Release
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sortedMedia.map((listOfMedia) => (
                      <tr key={listOfMedia.title}>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3 font-librefranklin text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                          <a
                            href={listOfMedia.streaming[0].link}
                            style={{ color: listOfMedia.color }}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="title-link"
                          >
                            {listOfMedia.title}
                          </a>
                        </td>
                        <td
                          className="whitespace-nowrap py-3 px-3 font-librefranklin text-sm font-normal"
                          style={{ color: listOfMedia.color }}
                        >
                          {listOfMedia.chronological_order}
                        </td>
                        <td
                          className="whitespace-nowrap py-3 px-3 font-librefranklin text-sm font-normal"
                          style={{ color: listOfMedia.color }}
                        >
                          {listOfMedia.release_order}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaList;
