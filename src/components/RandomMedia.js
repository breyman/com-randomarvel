import React from 'react';
import WatchMedia from './../components/WatchMedia';

function RandomMedia({media}){
  const [listType, setListType] = React.useState("any");
  const [myMedia, setMyMedia] = React.useState(null);

  const allMedia = media;
  let mediaList = [];
  let disney ="";
  let apple = "";
  let amazon ="";
  let title = "";
  let color = "";
  let watchText = <span></span>;

  function handleShowMedia(){
    switch(listType) {
      case "any":
        mediaList = allMedia;
        break;
      case "tv":
        mediaList = allMedia.filter((e) => e.type === "tv");
        break;
      case "movie":
        mediaList = allMedia.filter((e) => e.type === "movie");
        break;
      default:
        break;
    }
    if (mediaList.length > 0){
      let number = Math.floor(Math.random() * mediaList.length);
      setMyMedia(mediaList[number]);
    }
  }
  
  function handleTypeChange(e){
    setListType(e.target.title);
    setMyMedia(null);
  }
  
  // conditionally show stuff if it's time
  if(myMedia){
    watchText = <span className="mr-2">Watch on</span>;
    disney = myMedia.disney;
    apple = myMedia.apple;
    amazon = myMedia.amazon;
    title = myMedia.title;
    color = myMedia.color;
  }

  // conditionally render the watch mdeia icons depending on if a link exists in the data
  let watchDisney = "";
  let watchAmazon = "";
  let watchApple = "";
    
  if(disney && disney !== null){
    watchDisney = <WatchMedia link={disney} streaming="disney" color={color} />;
  }
  if(amazon && amazon !== null){
    watchAmazon = <WatchMedia link={amazon} streaming="amazon" color={color} />;
  }
  if(apple && apple !== null){
    watchApple = <WatchMedia link={apple} streaming="apple" color={color} />;
  }

  return(
    <div>
      <div className="column is-full has-text-centered">
        <h2 className="is-size-2 has-text-weight-bold" data-testid="title-display" id="media-title" style={{color: color}}>{title}</h2>
      </div>
      <div className="column is-full has-text-centered">
        <p>
          {watchText}
          {watchDisney}
          {watchAmazon}
          {watchApple}
        </p>
      </div>
      <div className="column is-full has-text-centered mt-6">
        <div className="buttons is-centered">
          <button className="button is-primary" value="Reload Page" onClick={handleShowMedia} data-testid="generate-random-marvel-button">Generate Random Marvel</button>
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