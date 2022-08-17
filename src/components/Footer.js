import React from 'react';


class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.handlePageChange = props.handlePageChange.bind;
  }
  
  render(){    
    return(

      <footer className="footer">
        
          <div className="content columns is-centered is-size-7 has-text-centered">
            <div className="column is-full is-centered has-text-centered">
              <span>
              <button className="is-link has-text-primary is-size-7" value="Reload Page"  onClick={() => {this.props.handlePageChange("media")}}>Generate Random Marvel</button>
              </span>
              <span className="has-text-grey ml-3 mr-3">|</span>
              <span>
              <button className="is-link has-text-primary is-size-7" value="Reload Page"  onClick={() => {this.props.handlePageChange("list")}}>Marvel List</button>
              </span>
              <span className="has-text-grey ml-3 mr-3">|</span>
              <span>
              <button className="is-link has-text-primary is-size-7" value="Reload Page"  onClick={() => {this.props.handlePageChange("about")}}>About</button>
              </span>
            </div>
        </div>
      </footer>
      
    )
        }
  }
  export default Footer;