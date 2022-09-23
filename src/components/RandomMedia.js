import React from 'react';
import WatchMedia from './../components/WatchMedia';

function RandomMedia({media}){
  const [allMedia , setAllMedia] = React.useState(media);
  // const [watchText, setWatchText] = React.useState(<span></span>);
  const [listType, setListType] = React.useState("any");

  let mediaList = [];
    
  switch(listType) {
    case "any":
      console.log("any");
      mediaList = allMedia;
      break;
    case "tv":
      console.log("tv");
      mediaList = allMedia.filter((e) => e.type === "tv");
      break;
    case "movie":
      console.log("movie");
      mediaList = allMedia.filter((e) => e.type === "movie");
      break;
    default:
      break;
  }
  
  let number = Math.floor(Math.random() * mediaList.length);
  let myMedia = mediaList[number];

  let watchText = <span></span>;
    
  watchText = <span className="mr-2">Watch on</span>;

  function handleRandomMarvel(){
    setListType("any");
    console.log("handling random marvel");
  }

  function handleTypeChange(e){
    setListType(e.target.title);
  }
  
  const disney = myMedia.disney;
  const apple = myMedia.apple;
  const amazon = myMedia.amazon;
  const title = myMedia.title;
  const color = myMedia.color;

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
          <button className="button is-primary" value="Reload Page" onClick={handleRandomMarvel} data-testid="generate-random-marvel-button">Generate Random Marvel</button>
        </div>
        <div className="buttons has-addons has-text-centered is-centered">
          <button title="any" data-testid="media-toggle-selector-all" className={listType === "any" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>Any</button>
          <button title="movie" data-testid="media-toggle-selector-movie" className={listType === "movie" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>Movie</button>
          <button title="tv" data-testid="media-toggle-selector-tv" className={listType === "tv" ? "button is-small is-info is-selected" : "button is-small"} onClick={handleTypeChange}>TV Show</button>
        </div>
      </div> 
    </div>   
  )
}

export default RandomMedia;