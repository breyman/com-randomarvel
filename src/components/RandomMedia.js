import React from 'react';
import WatchMedia from './../components/WatchMedia';

function RandomMedia({media, dataLoading}){
  const [listType, setListType] = React.useState("any");
  const [myMedia, setMyMedia] = React.useState(null);

  const allMedia = media;
  let mediaList = [];
  let streaming = []
  let title, color, watchText;

  function handleShowMedia(e){
    e.target.disabled = true;
    e.target.classList.add('is-loading');

    // pause to show loading animation
    setTimeout(() => {
      switch(listType) {
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
      if (mediaList.length > 0){
        let number = Math.floor(Math.random() * mediaList.length);
        setMyMedia(mediaList[number]);
      }

      e.target.disabled = false;
      e.target.classList.remove('is-loading');
    }, "450")

  }
  
  // if a category is changed, update things and reset to not display any media
  function handleTypeChange(e){
    setListType(e.target.title);
    setMyMedia(null);
  }

  // conditionally show stuff if it's time
  if(myMedia){
    watchText = <span className="mr-1">Watch on</span>;
    ({title, color, streaming} = myMedia);
  }

  let generateMarvelButton;
  if(dataLoading){
    generateMarvelButton = <button className="button is-primary is-loading" value="Reload Page" onClick={handleShowMedia} data-testid="generate-random-marvel-button" disabled>Generate Random Marvel</button>
  } else {
    generateMarvelButton = <button className="button is-primary" value="Reload Page" onClick={handleShowMedia} data-testid="generate-random-marvel-button">Generate Random Marvel</button>
  }

  return(
    <div>
      <div className="column is-full has-text-centered">
        <h2 className="is-size-2 has-text-weight-bold is-fade-in" key={title} data-testid="title-display" id="media-title" style={{color: color}}>{title}</h2>
      </div>
      <div className="column is-full has-text-centered">
        <p>
          {watchText}
          {streaming.map(listOfStreams => (
            <WatchMedia key={listOfStreams.service} link={listOfStreams.link} streaming={listOfStreams.service} color={color} />
           ))}
        </p>
      </div>
      <div className="column is-full has-text-centered mt-6">
        <div className="buttons is-centered">
          {generateMarvelButton}
        </div>
        <div className="buttons has-addons has-text-centered is-centered">
          <button title="any" data-testid="media-toggle-selector-all" className={listType === "any" || listType === "none" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>Any</button>
          <button title="movie" data-testid="media-toggle-selector-movie" className={listType === "movie" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>Movie</button>
          <button title="tv" data-testid="media-toggle-selector-tv" className={listType === "tv" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>TV Show</button>
        </div>
      </div> 
    </div>   
  )
}

export default RandomMedia;