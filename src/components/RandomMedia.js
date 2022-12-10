import React from "react";
import WatchMedia from "./../components/WatchMedia";

function RandomMedia({ media, dataLoading }) {
  const [listType, setListType] = React.useState("any");
  const [myMedia, setMyMedia] = React.useState(null);
  const [streamingListClasses, setStreamingListClasses] =
    React.useState("mt-5 text-center");

  const allMedia = media;
  let mediaList = [];
  let streaming = [];
  let title, color, watchText;
  let fadeInTimings = "450";

  function handleShowMedia(e) {
    e.target.disabled = true;
    e.target.classList.add("is-loading");

    // pause to show loading animation
    setTimeout(() => {
      switch (listType) {
        case "any":
          mediaList = allMedia;
          break;
        case "tv":
          mediaList = allMedia.filter((myObject) => myObject.type === "tv");
          break;
        case "movie":
          mediaList = allMedia.filter((myObject) => myObject.type === "movie");
          break;
        default:
          break;
      }
      if (mediaList.length > 0) {
        let number = Math.floor(Math.random() * mediaList.length);
        setMyMedia(mediaList[number]);
      }

      e.target.disabled = false;
      e.target.classList.remove("is-loading");

      // reset the streaming list classes so animation will start over next time
      setTimeout(() => {
        setStreamingListClasses("mt-5 text-center");
      }, fadeInTimings);

      // start animating the streaming list
      setStreamingListClasses("streaming-list-fade-in mt-5 text-center");
    }, fadeInTimings);
  }

  // if a category is changed, update things and reset to not display any media
  function handleTypeChange(e) {
    setListType(e.target.title);
    setMyMedia(null);
  }

  // conditionally show stuff if it's time
  if (myMedia) {
    watchText = (
      <span className="mr-1 font-librefranklin text-gray-800 dark:text-zinc-100">
        Watch on
      </span>
    );
    ({ title, color, streaming } = myMedia);
  }

  let generateMarvelButton;
  if (dataLoading) {
    generateMarvelButton = (
      <button
        className="is-loading bump-up-in absolute mb-3 min-w-[225px] rounded-md border-none bg-marvel-500 px-4 py-2 font-librefranklin text-white"
        type="button"
        value="Reload Page"
        onClick={handleShowMedia}
        data-testid="generate-random-marvel-button"
        disabled
      >
        Generate Random Marvel
      </button>
    );
  } else {
    generateMarvelButton = (
      <button
        className="bump-up-in absolute mb-3 min-w-[225px] rounded-md border-none bg-marvel-500 px-4 py-2 font-librefranklin text-white transition-colors hover:bg-marvel-600"
        type="button"
        value="Reload Page"
        onClick={handleShowMedia}
        data-testid="generate-random-marvel-button"
      >
        Generate Random Marvel
      </button>
    );
  }

  // generate the appropriate media selection button styles
  const leftButtonClasses = [
    "relative",
    "inline-flex",
    "items-center",
    "rounded-l-md",
    "border",
    listType === "any" ? "border-gray-500" : "border-gray-300",
    listType === "any" ? "bg-gray-500" : "bg-white",
    "px-4",
    "py-2",
    "text-xs",
    "font-librefranklin",
    "font-medium",
    listType === "any" ? "text-white" : "text-gray-700",
    listType === "any" ? "hover:bg-gray-600" : "hover:bg-gray-50",
  ].join(" ");

  const middleButtonClasses = [
    "relative",
    "-ml-px",
    "inline-flex",
    "items-center",
    "border",
    listType === "movie" ? "border-gray-500" : "border-gray-300",
    listType === "movie" ? "bg-gray-500" : "bg-white",
    "px-4",
    "py-2",
    "text-xs",
    "font-librefranklin",
    "font-medium",
    listType === "movie" ? "text-white" : "text-gray-700",
    listType === "movie" ? "hover:bg-gray-600" : "hover:bg-gray-50",
  ].join(" ");

  const rightButtonClasses = [
    "relative",
    "-ml-px",
    "inline-flex",
    "items-center",
    "rounded-r-md",
    "border",
    listType === "tv" ? "border-gray-500" : "border-gray-300",
    listType === "tv" ? "bg-gray-500" : "bg-white",
    "px-4",
    "py-2",
    "text-xs",
    "font-librefranklin",
    "font-medium",
    listType === "tv" ? "text-white" : "text-gray-700",
    listType === "tv" ? "hover:bg-gray-600" : "hover:bg-gray-50",
  ].join(" ");

  return (
    <>
      <h2
        className="is-fade-in text-xxl dark:is-white my-4 px-9 text-center font-librefranklin text-4xl font-bold"
        key={title}
        data-testid="title-display"
        id="media-title"
        style={{ color: color }}
      >
        {title}
      </h2>
      <div className={streamingListClasses}>
        <span>{watchText}</span>
        {streaming.map((listOfStreams) => (
          <WatchMedia
            key={listOfStreams.service}
            link={listOfStreams.link}
            streaming={listOfStreams.service}
            color={color}
          />
        ))}
      </div>
      <div className="mt-16 mb-28 flex justify-center lg:mt-36">
        {generateMarvelButton}
      </div>
      <div className="bump-up-in flex justify-center pt-7 lg:pt-16">
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            title="any"
            data-testid="media-toggle-selector-all"
            onClick={handleTypeChange}
            className={leftButtonClasses}
          >
            Any
          </button>
          <button
            type="button"
            title="movie"
            data-testid="media-toggle-selector-movie"
            onClick={handleTypeChange}
            className={middleButtonClasses}
          >
            Movie
          </button>
          <button
            type="button"
            title="tv"
            data-testid="media-toggle-selector-tv"
            onClick={handleTypeChange}
            className={rightButtonClasses}
          >
            TV Show
          </button>
        </span>
      </div>
    </>
  );
}

export default RandomMedia;
