import './assets/styles/styles.sass';
import Page from './components/Page';
import ReactGA from "react-ga4";


ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {

	return (
		<div>
			
			<Page />
			
		</div>
	);
}

export default App;
