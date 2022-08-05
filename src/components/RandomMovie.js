import React from 'react';
import WatchMovie from './../components/WatchMovie';
import gtag from 'ga-gtag';


class RandomMovie extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {movie: this.newMovie()};
    this.state = {movie: [null]};
    this.state.watchText = <span></span>;
  }
  
  newMovie(){
    let number = Math.floor(Math.random() * this.props.movies.length);
    let myMovie = this.props.movies[number];
    
    return myMovie;
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
  
  render(){
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
            <button className="button is-primary" value="Reload Page" onClick={() => this.refreshMovie()}>Random Marvel Movie</button>
          </div>
        </div> 
      </div>   
    )
  }
}

export default RandomMovie;