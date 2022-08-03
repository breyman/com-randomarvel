import './assets/styles/styles.sass';
import Page from './components/Page';
import gtag from 'ga-gtag';


gtag('event', 'page_load', {
	page_title: 'home',
})

function App() {

	return (
		<div>
			
			<Page />
			
		</div>
	);
}

export default App;
