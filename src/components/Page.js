import React from 'react';
import myData from './../data/marvel.json';
import RandomMedia from './../components/RandomMedia';
import MediaList from './../components/MediaList';
import Nav from './../components/Nav';
import Footer from './../components/Footer'
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
              
         
            <Nav handlePageChange={(newPage) => this.handlePageChange(newPage)} />
            
              {this.state.page}
              
            </div>
          </div>
        </div>
        
        <div class="column">
          
          <Footer handlePageChange={(newPage) => this.handlePageChange(newPage)} />
          
        </div>
        
      </div>
    )
  }
}

export default Page;