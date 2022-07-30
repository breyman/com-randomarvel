import './App.css';
import './assets/styles/styles.sass';
import myData from './data/data.json';

console.log(myData[0]);

const dataItem = Math.floor(Math.random() * myData.length)

function App() {
	return (
		<div>
			<div className="main">
				<div className="section">
					<div className="columns is-centered is-multiline">
						<nav className="column is-full mt-1 mb-1 is-centered has-text-centered">
								<a href="index.html" rel="noreferrer">
									<img src="/assets/images/logo.svg" className="is-80wide" alt="RandoMarvel Logo" />
								</a>
						</nav>
						<div className="column is-full has-text-centered">
							<h2 className="has-text-primary is-size-2 has-text-weight-bold">{myData[dataItem].title}</h2>
						</div>
						<div className="column is-full has-text-centered">
							<p>
								Watch on
								<span className="icon ml-2 mr-2">
									<a href={myData[dataItem].disney} className="has-text-primary" target="_blank" rel="noreferrer">
										<i className="fak fa-dplus"></i>
									</a>
								</span>
								<span className="icon mr-2">
									<a href={myData[dataItem].amazon} className="has-text-primary" target="_blank" rel="noreferrer">
										<i className="fa-brands fa-amazon"></i>
									</a>
								</span>
								<span className="icon">
									<a href={myData[dataItem].apple} className="has-text-primary" target="_blank" rel="noreferrer">
										<i className="fa-brands fa-apple"></i>
									</a>
								</span>
							</p>
						</div>
						<div className="column is-full has-text-centered mt-6">
							<div className="buttons is-centered">
								<button className="button is-primary">Choose a Random Marvel Movie</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="footer has-text-centered">
				<div className="container">
					<div className="columns is-centered is-size-7">
						<div className="column is-full is-centered has-text-centered">
							<span className="mr-3">
								<a href="index.html" className="has-text-primary">
									Pick a Movie
								</a>
							</span>
							<span className="has-text-grey">|</span>
							<span className="ml-3">
								<a href="index.html" className="has-text-primary">
									About
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
