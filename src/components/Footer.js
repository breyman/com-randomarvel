import React from 'react';

function Footer({handlePageChange}){
    return(
      <footer className="footer">
        
          <div className="content columns is-centered is-size-7 has-text-centered">
            <div className="column is-full is-centered has-text-centered">
              <span>
              <button className="is-link has-text-primary is-size-7" title="media" onClick={handlePageChange}>Generate Random Marvel</button>
              </span>
              <span className="has-text-grey ml-3 mr-3">|</span>
              <span>
              <button className="is-link has-text-primary is-size-7" title="list" onClick={handlePageChange}>Marvel List</button>
              </span>
              <span className="has-text-grey ml-3 mr-3">|</span>
              <span>
              <button className="is-link has-text-primary is-size-7" title="about" onClick={handlePageChange}>About</button>
              </span>
            </div>
        </div>
      </footer>
    )
  }
  export default Footer;