import './assets/styles/styles.sass';
import Page from './components/Page';


import ReactGA4 from "react-ga4";
ReactGA4.send({ hitType: "pageview", page: window.location.pathname });

function App() {

	return (
		<div>
			
			<Page />
			
		</div>
	);
}

export default App;
