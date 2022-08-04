import React from 'react';


class MovieList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {movies: props.movies};
    this.state.order = "";
  }
  
  componentDidMount() {
    
    // start page by showing the list chronologically
    this.sortList("chrono");
    
  }
  
  sortList(order){
    let sortedMovies = null;
    
    if(order ==="chrono"){
      sortedMovies = this.state.movies.sort((a,b) => (a.chronologicalorder > b.chronologicalorder) ? 1 : ((b.chronologicalorder > a.chronologicalorder) ? -1 : 0));
    }
    if(order ==="release"){
      sortedMovies = this.state.movies.sort((a,b) => (a.releaseorder > b.releaseorder) ? 1 : ((b.releaseorder > a.releaseorder) ? -1 : 0));
    }

    this.setState({
      movie: sortedMovies,
      order: order
    }); 
  }

  
  render(){
    const order = this.state.order;
    
    let timelineButtonClass = "";
    let releaseButtonClass = "";
    
    if(order === "chrono"){
      timelineButtonClass = "button is-small is-primary is-selected";
      releaseButtonClass = "button is-small";
    }
    if(order === "release"){
      timelineButtonClass = "button is-small";
      releaseButtonClass = "button is-small is-primary is-selected";
    }
    
    return(
      <div>
        <div className="column is-full has-text-centered">
          <h2 className="has-text-primary is-size-2 has-text-weight-bold">Marvel Movies</h2>
        </div>
        <div className="column is-full has-text-centered">
          <div className="buttons has-addons has-text-centered is-centered">
            <button className={timelineButtonClass} onClick={() => this.sortList("chrono")}>By Timeline</button>
            <button className={releaseButtonClass} onClick={() => this.sortList("release")}>By Release</button>
          </div>
          <p>
            <table className="table is-bordered is-striped is-fullwidth">       
            <thead>
              <tr>
                <th className="has-text-centered" title="Title">Title</th>
                <th className="has-text-centered" title="Chrono">Timeline Order</th>
                <th className="has-text-centered" title="Release">Release Order</th>
              </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                  <tr>
                    <td key={movie.title}>{movie.title}</td>
                    <td>{movie.chronologicalorder}</td>
                    <td>{movie.releaseorder}</td>
                  </tr>
                ))}
            </tbody>
          </table>
            
          </p>
        </div>
        <div className="column is-full has-text-centered mt-6">
          
        </div> 
      </div>   
    )
  }
}

export default MovieList;