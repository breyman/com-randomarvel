import React from 'react';
import myData from './../data/marvel.json';
import RandomMedia from './../components/RandomMedia';
import MediaList from './../components/MediaList';
import Nav from './../components/Nav';
import Footer from './../components/Footer'
import About from './../components/About';
// import gtag from 'ga-gtag';

function Page(){
  const [page, setPage] = React.useState("media");

  let displayPage;
  
  switch(page) {
    case "media":
      displayPage = <RandomMedia media={myData} />;
      break;
    case "list":
      displayPage = <MediaList media={myData} />
      break;
    case "about":
      displayPage = <About />
      break;
    default:
      break;
  }

  return(
    <div>
      <div className="main">
        <div className="section">
          <div className="columns is-centered is-multiline">
          <Nav handlePageChange={event => setPage(event.target.title)} />
            {displayPage}
          </div>
        </div>
      </div>
      
      <div className="column">
        <Footer handlePageChange={event => setPage(event.target.title)} />
      </div>
    </div>
  )
}

export default Page;