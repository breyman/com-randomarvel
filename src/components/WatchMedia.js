import React from 'react';

class WatchMedia extends React.Component{

  render(){
    let streamingClass = "";

    // set the right icon for the service
    switch(this.props.streaming) {
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
          <a href={this.props.link} style={{color: this.props.color}} data-testid="media-icon-link" target="_blank" rel="noreferrer">
            <i className={streamingClass} data-testid="media-icon"></i>
          </a>
        </span>
    );
  }
}

export default WatchMedia;