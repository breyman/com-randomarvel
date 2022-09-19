import React from 'react';
import myData from './../data/marvel.json';
import RandomMedia from './../components/RandomMedia';
import Nav from './../components/Nav';
import Footer from './../components/Footer'
// import gtag from 'ga-gtag';

class Page extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {page: <div></div>, myStateData: myData};
    this.state = {page: <div></div>, myStateData: []};
    this.handlePageChange = this.handlePageChange.bind(this);
    
  }
  
  componentDidMount() {
    // default page should allow movie selection

    fetch("http://localhost:3000/marvel/")
    .then((response) => response.json())
    .then((data) => {
      this.setState({myStateData: data});
      // console.log(data);
      // console.log(this.state.myStateData);
    });   

    // this.setPage("media");
    
    
  }
  
  setPage(page){
    if(page === "about"){
      // this.setState({
      //   page: <About />
      // });
      
      // gtag('event', 'page_load', {
      //   page_title: 'about',
      // })  
    }
    if(page === "media"){
      this.setState({
        page: <RandomMedia media={this.state.myStateData} />
      });
      
      // gtag('event', 'page_load', {
      //   page_title: 'marvelmedia',
      // })
      
    }
    // if(page === "list"){
    //   this.setState({
    //     page: <MediaList media={myData} />
    //   });
      
      // gtag('event', 'page_load', {
      //   page_title: 'movielist',
      // })
      
    // }
  }


  handlePageChange(newPage) {
    // console.log("brian");
    this.setPage(newPage);
  }

  
  render(){
  

    // console.log(this.state.myStateData);
    // console.log(myData);
    return(
      <div>
        <div className="main">
          <div className="section">
            <div className="columns is-centered is-multiline">
              
         
            <Nav handlePageChange={(newPage) => this.handlePageChange(newPage)} />
            
            <RandomMedia media={this.state.myStateData} />
              
            </div>
          </div>
        </div>
        
        <div className="column">
          
          <Footer handlePageChange={(newPage) => this.handlePageChange(newPage)} />
          
        </div>
        
      </div>
    )
  }
}

export default Page;