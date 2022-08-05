import React from 'react';
import WatchMovie from './../components/WatchMovie';
import gtag from 'ga-gtag';


class RandomMovie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {movie: [null]};
    this.state.listType = "any";
    this.state.watchText = <span></span>;
    this.state.allMedia = this.props.movies;
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
  
  newMovie(){
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
      movie: [],
      watchText: <span></span>
    });
    
  }
  
  refreshMovie(){
    const anotherMovie = this.newMovie();
    
    this.setState({
      movie: anotherMovie
    });
    this.setState({
      watchText: <span className="mr-2">Watch on</span>
    });
    
    gtag('event', 'page_action', {
      page_title: 'refreshmovie',
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
          <h2 className="has-text-primary is-size-2 has-text-weight-bold">{this.state.movie.title}</h2>
        </div>
        <div className="column is-full has-text-centered">
          <p>
            {this.state.watchText}
            <WatchMovie link={this.state.movie.disney} streaming="disney" />
            <WatchMovie link={this.state.movie.amazon} streaming="amazon" />
            <WatchMovie link={this.state.movie.apple} streaming="apple" />
            
          </p>
        </div>
        <div className="column is-full has-text-centered mt-6">
          <div className="buttons is-centered">
            <button className="button is-primary" value="Reload Page" onClick={() => this.refreshMovie()}>Generate Random Marvel</button>
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

export default RandomMovie;