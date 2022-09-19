import React from 'react';
import WatchMedia from './../components/WatchMedia';
// import gtag from 'ga-gtag';

class RandomMedia extends React.Component{
  constructor(props) {
    super(props);
    this.state = {media: [null]};
    this.state.listType = "any";
    this.state.watchText = <span></span>;
    this.state.allMedia = this.props.media;
    this.state.allMovies = [];
    this.state.allTV = [];
    // console.log(this.props.media);
  }
  
  componentDidMount() {
    this.updateComponentData();
    // console.log("mount");
    // console.log(this.props.media);
    
  }
  
  updateComponentData(){
    this.setState({
      allMovies: this.getNewLists(this.props.media, "movie"),
      allTV: this.getNewLists(this.props.media, "tv")
    })

  }

  getNewLists(existingList, type){
    
    const newList = existingList.filter(splitMedia, type);
    
    return newList;
    
    function splitMedia(item) {
      return item.type === this;
    }
    
  }
  
  newMedia(){
    
    this.setState({
      allMovies: this.getNewLists(this.props.media, "movie"),
      allTV: this.getNewLists(this.props.media, "tv")
    })
    console.log(this.state.listType);

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
    // let myMedia = mediaList[number];
    let myMedia = this.getNewLists(this.props.media, "tv");
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
    
    // gtag('event', 'page_action', {
    //   page_title: 'refreshmarvelmedia',
    // })

  }
  
  setListType(type){
    this.setState({
      listType: type
    });
  }
  
  render(){

    let listType = this.state.listType;
    
    // conditionally render the watch mdeia icons depending on if a link exists in the data
    let watchDisney = "";
    let watchAmazon = "";
    let watchApple = "";
    
    if(this.state.media.disney && this.state.media.disney !== null){
      watchDisney = <WatchMedia link={this.state.media.disney} streaming="disney" color={this.state.media.color} />;
    }
    if(this.state.media.amazon && this.state.media.amazon !== null){
      watchAmazon = <WatchMedia link={this.state.media.amazon} streaming="amazon" color={this.state.media.color} />;
    }
    if(this.state.media.apple && this.state.media.apple !== null){
      watchApple = <WatchMedia link={this.state.media.apple} streaming="apple" color={this.state.media.color} />;
    }

    return(
      <div>
        <div className="column is-full has-text-centered">
          <h2 className="is-size-2 has-text-weight-bold" data-testid="title-display" id="media-title" style={{color: this.state.media.color}}>{this.state.media.title}</h2>
        </div>
        <div className="column is-full has-text-centered">
          <p>
            {this.state.watchText}
            {watchDisney}
            {watchAmazon}
            {watchApple}
          </p>
        </div>
        <div className="column is-full has-text-centered mt-6">
          <div className="buttons is-centered">
            <button className="button is-primary" value="Reload Page" onClick={() => this.refreshMedia()} data-testid="generate-random-marvel-button">Generate Random Marvel</button>
          </div>
          <div className="buttons has-addons has-text-centered is-centered">
            <button data-testid="media-toggle-selector-all" className={listType === "any" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("any")}>Any</button>
            <button data-testid="media-toggle-selector-movie" className={listType === "movie" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("movie")}>Movie</button>
            <button data-testid="media-toggle-selector-tv" className={listType === "tv" ? "button is-small is-info is-selected" : "button is-small"} onClick={() => this.changeListType("tv")}>TV Show</button>
          </div>
        </div> 
      </div>   
    )
  }
}

export default RandomMedia;