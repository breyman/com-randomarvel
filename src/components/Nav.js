import React from 'react';


class Nav extends React.Component{
  constructor(props) {
    super(props);
    // console.log(props);
    this.handleChange = this.handleChange.bind(this);    
    
  }
  
  handleChange(e){
    console.log(e);
    let newPage = "media";
    this.props.handlePageChange(newPage);
  }
  
  render(){    
    return(
      <nav className="column is-full mt-1 mb-1 is-centered has-text-centered">
        <img src="/assets/images/logo.svg" className="is-256wide is-link" alt="RandoMarvel Logo" onClick={this.handleChange} />
      </nav>   
    )
  }
}
export default Nav;