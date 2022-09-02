import React from 'react';


class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.handlePageChange = props.handlePageChange.bind;
  }
  
  render(){    
    return(
      <nav className="column is-full mt-1 mb-1 is-centered has-text-centered">
        <img src="/assets/images/logo.svg" id="header-logo" className="is-256wide is-link" alt="RandoMarvel Logo" onClick={() => {this.props.handlePageChange("media")}} />
      </nav>   
    )
  }
}
export default Nav;