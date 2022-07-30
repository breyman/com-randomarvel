import './App.css';
import './assets/styles/styles.sass';
import myData from './data/data.json';

console.log(myData[0]);

const dataItem = Math.floor(Math.random() * myData.length)

function App() {
	return (
		<div>
			<nav className="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
				<div id="navbarMainNavItems" className="navbar-menu">
					<div className="navbar-start navbar-move-right"></div>
					<a className="navbar-item navbar-logo" href="index.html" rel="noreferrer">
						<img src="/assets/images/logo.svg" width="80px" height="80px" alt="RandoMarvel Logo" />
					</a>
					<div className="navbar-end navbar-move-left"></div>
				</div>
			</nav>

			<div className="main">
				<div className="section">
					<div className="columns is-centered is-multiline">
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
						<div className="mr-3">
							<a href="index.html" className="has-text-primary">
								Pick a Movie
							</a>
						</div>
						<div>|</div>
						<div className="ml-3">
							<a href="index.html" className="has-text-primary">
								About
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
