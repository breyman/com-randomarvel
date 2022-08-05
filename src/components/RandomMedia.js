import React from 'react';
import WatchMedia from './../components/WatchMedia';
import gtag from 'ga-gtag';


class RandomMedia extends React.Component{
  constructor(props) {
    super(props);
    this.state = {media: [null]};
    this.state.listType = "any";
    this.state.watchText = <span></span>;
    this.state.allMedia = this.props.media;
    this.state.allMovies = [];
    this.state.allTV = [];
  }
  
  componentDidMount() {
    this.setState({
      allMovies: this.getNewLists(this.state.allMedia, "movie"),
      allTV: this.getNewLists(this.state.allMedia, "tv")
    })
    
  }
  
  componentWillUnmount() {
  }
  
  getNewLists(existingList, type){
    
    const newList = existingList.filter(splitMedia, type);
    
    return newList;
    
    function splitMedia(item) {
      return item.type === this;
    }
    
  }
  
  newMedia(){
    let mediaList = [];
    
    switch(this.state.listType) {
      case "any":
        mediaList = this.state.allMedia;
        break;
      case "tv":
        mediaList = this.state.allTV;
        break;
      case "movie":
        mediaList = this.state.allMovies;
        break;
      default:
        break;
    }
        
    let number = Math.floor(Math.random() * mediaList.length);
    let myMedia = mediaList[number];
    return myMedia;
  }
  
  changeListType(type){
    
    this.setState({
      listType: type,
      // clear out the movie since a setting changed
      media: [],
      watchText: <span></span>
    });
    
  }
  
  refreshMedia(){
    const anotherMedia = this.newMedia();
    
    this.setState({
      media: anotherMedia
    });
    this.setState({
      watchText: <span className="mr-2">Watch on</span>
    });
    
    gtag('event', 'page_action', {
      page_title: 'refreshmarvelmedia',
    })
  }
  
  setListType(type){
    this.setState({
      listType: type
    });
  }
  
  render(){
    
    let listType = this.state.listType;
    
    return(
      <div>
        <div className="column is-full has-text-centered">
          <h2 className="has-text-primary is-size-2 has-text-weight-bold">{this.state.media.title}</h2>
        </div>
        <div className="column is-full has-text-centered">
          <p>
            {this.state.watchText}
            <WatchMedia link={this.state.media.disney} streaming="disney" />
            <WatchMedia link={this.state.media.amazon} streaming="amazon" />
            <WatchMedia link={this.state.media.apple} streaming="apple" />
            
          </p>
        </div>
        <div className="column is-full has-text-centered mt-6">
          <div className="buttons is-centered">
            <button className="button is-primary" value="Reload Page" onClick={() => this.refreshMedia()}>Generate Random Marvel</button>
          </div>
          <div className="buttons has-addons has-text-centered is-centered">
            <button className={listType === "any" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("any")}>Any</button>
            <button className={listType === "movie" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("movie")}>Movie</button>
            <button className={listType === "tv" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("tv")}>TV Show</button>
          </div>
        </div> 
      </div>   
    )
  }
}

export default RandomMedia;