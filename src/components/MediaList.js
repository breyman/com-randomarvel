import React from 'react';

function MediaList({media = []}){
  
  // set intial variables and some state
  let passedMedia = media;
  let sortedMedia = [];

  // start page by showing the list chronologically
  const [order, setOrder] = React.useState('chrono');

      if(order ==="chrono"){
        sortedMedia = passedMedia.sort((a,b) => (a.chronological_order > b.chronological_order) ? 1 : ((b.chronological_order > a.chronological_order) ? -1 : 0));
      }
      if(order ==="release"){
        sortedMedia = passedMedia.sort((a,b) => (a.release_order > b.release_order) ? 1 : ((b.release_order > a.release_order) ? -1 : 0));
      }
    
  
  return(
    <div>
      <div className="column is-full has-text-centered">
        <h2 className="has-text-primary is-size-2 has-text-weight-bold">Marvel Movies and TV Shows</h2>
      </div>
      <div className="column is-full has-text-centered">
        <div className="buttons has-addons has-text-centered is-centered">
          <button className = {order === "chrono" ? "button is-small is-primary is-selected" : "button is-small"} onClick={() => {setOrder("chrono")}}>By Timeline</button>
          <button className = {order === "release" ? "button is-small is-primary is-selected" : "button is-small"} onClick={() => {setOrder("release")}}>By Release</button>
        </div>
        <div>
          <table className="table is-bordered is-striped is-fullwidth">       
          <thead>
            <tr>
              <th className="has-text-centered has-no-borders" title="Title"></th>
              <th className="has-text-centered" title="Chrono">Timeline</th>
              <th className="has-text-centered" title="Release">Release</th>
            </tr>
          </thead>
          <tbody>
              {sortedMedia.map(listOfMedia => (
                <tr key={listOfMedia.title}>
                  <td><a href={listOfMedia.disney} style={{color: listOfMedia.color}} target="_blank" rel="noreferrer">{listOfMedia.title}</a></td>
                  <td style={{color: listOfMedia.color}}>{listOfMedia.chronological_order}</td>
                  <td style={{color: listOfMedia.color}}>{listOfMedia.release_order}</td>
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

export default MediaList;