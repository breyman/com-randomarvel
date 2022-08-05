import React from 'react';


class MediaList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {media: props.media};
    this.state.order = "";
  }
  
  componentDidMount() {
    
    // start page by showing the list chronologically
    this.sortList("chrono");
    
  }
  
  sortList(order){
    let sortedMedia = null;
    
    if(order ==="chrono"){
      sortedMedia = this.state.media.sort((a,b) => (a.chronologicalorder > b.chronologicalorder) ? 1 : ((b.chronologicalorder > a.chronologicalorder) ? -1 : 0));
    }
    if(order ==="release"){
      sortedMedia = this.state.media.sort((a,b) => (a.releaseorder > b.releaseorder) ? 1 : ((b.releaseorder > a.releaseorder) ? -1 : 0));
    }

    this.setState({
      media: sortedMedia,
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
          <div>
            <table className="table is-bordered is-striped is-fullwidth">       
            <thead>
              <tr>
                <th className="has-text-centered has-no-borders" title="Title"></th>
                <th className="has-text-centered has-no-borders" title="Type"></th>
                <th className="has-text-centered" title="Chrono">Timeline Order</th>
                <th className="has-text-centered" title="Release">Release Order</th>
              </tr>
            </thead>
            <tbody>
                {this.state.media.map(media => (
                  <tr key={media.title}>
                    <td>{media.title}</td>
                    <td>{media.type === "movie" ? "Movie" : media.type === "tv" ? "TV Show" : ""}</td>
                    <td>{media.chronologicalorder}</td>
                    <td>{media.releaseorder}</td>
                  </tr>
                ))}
            </tbody>
          </table>
            
          </div>
        </div>
        <div className="column is-full has-text-centered mt-6">
          
        </div> 
      </div>   
    )
  }
}

export default MediaList;