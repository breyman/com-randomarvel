import React from 'react';
import myData from './../data/marvel.json';
import Nav from './../components/Nav';
import RandomMovie from './../components/RandomMovie';
import About from './../components/About';


import ReactGA from "react-ga4";
ReactGA.initialize("G-27W2KXSBSN");

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {page: <div></div>};
  }
  
  componentDidMount() {
    this.setPage("movie");
  }
  
  setPage(page){
    if(page === "about"){
      this.setState({
        page: <About />
      });
      ReactGA.event({category:"page", action:"navigate", label:"about"});
    }
    if(page === "movie"){
      this.setState({
        page: <RandomMovie movies={myData} />
      });
      ReactGA.event({category:"page", action:"navigate", label:"movie"});
    }
  }
  
  render(){
    return(
      <div>
        <div className="main">
          <div className="section">
            <div className="columns is-centered is-multiline">
              
              <Nav />
            
              {this.state.page}
              
            </div>
          </div>
        </div>
        
        <footer className="footer has-text-centered">
          <div className="container">
            <div className="columns is-centered is-size-7">
              <div className="column is-full is-centered has-text-centered">
                <span>
                <button className="is-link has-text-primary is-size-7" value="Reload Page" onClick={() => this.setPage("movie")}>Random Marvel Movie</button>
                </span>
                <span className="has-text-grey ml-3 mr-3">|</span>
                <span>
                <button className="is-link has-text-primary is-size-7" value="Reload Page" onClick={() => this.setPage("about")}>About</button>
                </span>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    )
  }
}

export default Page;