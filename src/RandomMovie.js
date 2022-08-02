import React from 'react';

class RandomMovie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {props};
    this.state = {movie: this.newMovie()};
  }
  
  newMovie(){
    // console.log(this.props);
    let number = Math.floor(Math.random() * this.props.movies.length);
    let myMovie = this.props.movies[number];
    return myMovie;
  }
  
  refreshMovie(){
    const anotherMovie = this.newMovie();
    
    this.setState({
      movie: anotherMovie
    });
    console.log(anotherMovie);
  }
  
  render(){
    return(
      <div>
        <div className="column is-full has-text-centered">
          <h2 className="has-text-primary is-size-2 has-text-weight-bold">{this.state.movie.title}</h2>
        </div>
        <div className="column is-full has-text-centered">
          <p>
            Watch on
            <span className="icon ml-2 mr-2">
              <a href={this.state.movie.disney} className="has-text-primary" target="_blank" rel="noreferrer">
                <i className="fak fa-dplus"></i>
              </a>
            </span>
            <span className="icon mr-2">
              <a href={this.state.movie.amazon} className="has-text-primary" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-amazon"></i>
              </a>
            </span>
            <span className="icon">
              <a href={this.state.movie.apple} className="has-text-primary" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-apple"></i>
              </a>
            </span>
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