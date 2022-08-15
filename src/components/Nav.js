import React from 'react';


class Nav extends React.Component{
  constructor(props) {
    super(props);
    
  }
  
  render(){    
    return(
      <nav className="column is-full mt-1 mb-1 is-centered has-text-centered">
        <img src="/assets/images/logo.svg" className="is-256wide is-link" alt="RandoMarvel Logo" onClick={() => {this.props.handlePageChange("media")}} />
      </nav>   
    )
  }
}
export default Nav;