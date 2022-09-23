import React from 'react';

function Nav({handlePageChange}){
  return(
    <nav className="column is-full mt-1 mb-1 is-centered has-text-centered">
      <img src="/assets/images/logo.svg" id="header-logo" title="media" className="is-256wide is-link" alt="RandoMarvel Logo" onClick={handlePageChange} />
    </nav>   
  )
}

export default Nav;