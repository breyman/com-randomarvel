const refreshPage = () => window.location.reload(false);

function RandomMovie(props){
  return(
    <div>
      <div className="column is-full has-text-centered">
        <h2 className="has-text-primary is-size-2 has-text-weight-bold">{props.movie.title}</h2>
      </div>
      <div className="column is-full has-text-centered">
        <p>
          Watch on
          <span className="icon ml-2 mr-2">
            <a href={props.movie.disney} className="has-text-primary" target="_blank" rel="noreferrer">
              <i className="fak fa-dplus"></i>
            </a>
          </span>
          <span className="icon mr-2">
            <a href={props.movie.amazon} className="has-text-primary" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-amazon"></i>
            </a>
          </span>
          <span className="icon">
            <a href={props.movie.apple} className="has-text-primary" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-apple"></i>
            </a>
          </span>
        </p>
      </div>
      <div className="column is-full has-text-centered mt-6">
        <div className="buttons is-centered">
          <button className="button is-primary" value="Reload Page" onClick={refreshPage}>Random Marvel Movie</button>
        </div>
      </div> 
    </div>   
  )
}

export default RandomMovie;