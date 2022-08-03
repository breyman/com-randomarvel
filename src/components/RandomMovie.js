import React from 'react';
import WatchMovie from './../components/WatchMovie';

class RandomMovie extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {movie: this.newMovie()};
    this.state.movie;
    this.state.watchText;
  }
  
  newMovie(){
    let number = Math.floor(Math.random() * this.props.movies.length);
    // let number = this.props.movies.length - 1;
    let myMovie = this.props.movies[number];
    // console.log(myMovie);
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
            <button className="button is-primary" value="Reload Page" onClick={() => this.refreshMovie()}>Generate Random Marvel Movie</button>
          </div>
        </div> 
      </div>   
    )
  }
}

export default RandomMovie;