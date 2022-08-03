import './assets/styles/styles.sass';
import Page from './components/Page';

import ReactGA from "react-ga4";
ReactGA.initialize("G-27W2KXSBSN");

ReactGA.event({category:"page", action:"load", label:"home"});

function App() {

	return (
		<div>
			
			<Page />
			
		</div>
	);
}

export default App;
