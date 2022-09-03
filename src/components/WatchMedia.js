import React from 'react';

class WatchMedia extends React.Component{
  constructor(props) {
    super(props);
    
    this.myStreaming = props.streaming;
    this.myColor = props.color;
    this.myLink = props.link;
  }
  
  render(){
    let streamingClass = "";

    // set the right icon for the service
    switch(this.myStreaming) {
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

    return(
        <span className="icon ml-2">
          <a href={this.myLink} style={{color: this.myColor}} data-testid="media-icon-link" target="_blank" rel="noreferrer">
            <i className={streamingClass} data-testid="media-icon"></i>
          </a>
        </span>
    );
  }
}

export default WatchMedia;