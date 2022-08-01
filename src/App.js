import './assets/styles/styles.sass';
import myData from './data/marvel.json';
import Nav from './Nav';
import RandomMovie from './RandomMovie';
import Footer from './Footer';

const dataItem = Math.floor(Math.random() * myData.length);

function App() {
	return (
		<div>
			<div className="main">
				<div className="section">
					<div className="columns is-centered is-multiline">
						
						<Nav />
						
						<RandomMovie movie={myData[dataItem]} />						
						
					</div>
				</div>
			</div>

			<Footer />
			
		</div>
	);
}

export default App;
