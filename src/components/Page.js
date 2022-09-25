import React from 'react';
// import myDataFile from './../data/marvel.json'; // get the data from a local file
import RandomMedia from './../components/RandomMedia';
import MediaList from './../components/MediaList';
import Nav from './../components/Nav';
import Footer from './../components/Footer'
import About from './../components/About';

function Page(){
  // const myData = myDataFile; // for use if you want to use the local file
  
  // code to grab the data from the API
  function getList(){
    return fetch('https://api.disneydata.io/marvel/')
    // return fetch('http://localhost:3000/marvel/') // for local testing
      .then(data => data.json())
  }

  const [myData, setMyData] = React.useState([]);

  React.useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          // dataRef.current = items;
          setMyData(items);
        }
      })
    return () => mounted = false;
  }, [])
  // end of code to grab the data from the API

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