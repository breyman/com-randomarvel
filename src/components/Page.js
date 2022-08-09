import React from 'react';
import myData from './../data/marvel.json';
import RandomMedia from './../components/RandomMedia';
import MediaList from './../components/MediaList';
import Nav from './../components/Nav';
import About from './../components/About';
import gtag from 'ga-gtag';

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {page: <div></div>};
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  componentDidMount() {
    
    // default page should allow movie selection
    this.setPage("media");
    
  }
  
  handlePageChange(newPage) {
    // console.log("brian");
    this.setPage(newPage);
  }
  
  setPage(page){
    if(page === "about"){
      this.setState({
        page: <About />
      });
      
      gtag('event', 'page_load', {
        page_title: 'about',
      })  
    }
    if(page === "media"){
      this.setState({
        page: <RandomMedia media={myData} />
      });
      
      gtag('event', 'page_load', {
        page_title: 'marvelmedia',
      })
      
    }
    if(page === "list"){
      this.setState({
        page: <MediaList media={myData} />
      });
      
      gtag('event', 'page_load', {
        page_title: 'movielist',
      })
      
    }
  }
  
  render(){
    
    // console.log(this.handlePageChange);
    
    return(
      <div>
        <div className="main">
          <div className="section">
            <div className="columns is-centered is-multiline">
              
         
            <Nav handlePageChange={this.handlePageChange} />
            
              {this.state.page}
              
            </div>
          </div>
        </div>
        
        <div class="column">
          <footer className="footer">
            
              <div className="content columns is-centered is-size-7 has-text-centered">
                <div className="column is-full is-centered has-text-centered">
                  <span>
                  <button className="is-link has-text-primary is-size-7" value="Reload Page" onClick={() => this.setPage("media")}>Generate Random Marvel</button>
                  </span>
                  <span className="has-text-grey ml-3 mr-3">|</span>
                  <span>
                  <button className="is-link has-text-primary is-size-7" value="Reload Page" onClick={() => this.setPage("list")}>Marvel List</button>
                  </span>
                  <span className="has-text-grey ml-3 mr-3">|</span>
                  <span>
                  <button className="is-link has-text-primary is-size-7" value="Reload Page" onClick={() => this.setPage("about")}>About</button>
                  </span>
                </div>
            </div>
          </footer>
        </div>
        
      </div>
    )
  }
}

export default Page;