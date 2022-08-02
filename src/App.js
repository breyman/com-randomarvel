import './assets/styles/styles.sass';
import myData from './data/marvel.json';
import Nav from './Nav';
import RandomMovie from './RandomMovie';
import Footer from './Footer';

function App() {
	return (
		<div>
			<div className="main">
				<div className="section">
					<div className="columns is-centered is-multiline">
						
						<Nav />
						
						<RandomMovie movies={myData} />						
						
					</div>
				</div>
			</div>

			<Footer />
			
		</div>
	);
}

export default App;
