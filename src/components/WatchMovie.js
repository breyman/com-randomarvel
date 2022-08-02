function WatchMovie(props){
  
  let streamingClass = "";
  let icon;
  
  if(props.link === null){
    
  }else {  
    
    switch(props.streaming) {
      case "disney":
        streamingClass = "fak fa-dplus";
        break;
      case "amazon":
        streamingClass = "fa-brands fa-amazon";
        break;
      case "apple":
        streamingClass = "fa-brands fa-apple";
        break;
      default:
        break;
    }
    
    icon = (
    <span className="icon ml-2">
      <a href={props.link} className="has-text-primary" target="_blank" rel="noreferrer">
        <i className={streamingClass}></i>
      </a>
    </span>
    )
  }
  
  return(
    <span>
      {icon}
    </span>
  )
}

export default WatchMovie;