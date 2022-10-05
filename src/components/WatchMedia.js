function WatchMedia({streaming, link, color}){  
    let streamingClass = "";

    // set the right icon for the service
    switch(streaming) {
      case "disney+":
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
    return(
        <span className="icon ml-2">
          <a href={link} style={{color: color}} data-testid="media-icon-link" target="_blank" rel="noreferrer">
            <i className={streamingClass} data-testid="media-icon"></i>
          </a>
        </span>
    );
    
}

export default WatchMedia;