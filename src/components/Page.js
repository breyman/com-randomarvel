import React from 'react';
import myDataFile from './../data/marvel.json'; // get the data from a local file
import RandomMedia from './../components/RandomMedia';
import MediaList from './../components/MediaList';
import Nav from './../components/Nav';
import Footer from './../components/Footer'
import About from './../components/About';

function Page(){

  const [myData, setMyData] = React.useState([]);
  const [apiIsLoading, setApiIsLoading] = React.useState(true);

  React.useEffect(() => {
    getResponse().then(items => {
     setMyData(items); setApiIsLoading(false);
    }, (issue) => {setMyData(myDataFile); setApiIsLoading(true);}).catch((error) => {}); // fall back to a local file if getting the api data isn't working properly
  }, []);

  // function delay(time) {
  //   return new Promise(resolve => setTimeout(resolve, time));
  // }

  async function getResponse() {
    const response = await fetch(
      'https://api.disneydata.io/marvel/'
    );

    // console.log("before delay");
    // await delay(1000);
    // console.log("after delay");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }else{
      const data = await response.json(); // Extracting data as a JSON Object from the response
      return data;
    }   
  }
  getResponse().catch((error) => {
  })

  // end of code to grab the data from the API

  const [page, setPage] = React.useState("media");

  let displayPage;

  
  switch(page) {
    case "media":
      // console.log(`apiIsLoading: ${apiIsLoading}`);
      displayPage = <RandomMedia media={myData} dataLoading={apiIsLoading} />;
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