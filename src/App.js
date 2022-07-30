// import logo from './logo.svg';
// import logo from './assets/images/RandoMarvel_Logo_Red.png';
import './App.css';
import './assets/styles/styles.sass';

function App() {
	return (
		<div>
			<nav className="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
				<div id="navbarMainNavItems" class="navbar-menu">
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
							<h2 className="has-text-primary is-size-2 has-text-weight-bold">Iron Man</h2>
						</div>
						<div className="column is-full has-text-centered">
							<p>
								Watch on
								<span class="icon ml-2 mr-2">
									<a href="https://www.disneyplus.com/" className="has-text-primary" target="_blank" rel="noreferrer">
										<i className="fak fa-dplus"></i>
									</a>
								</span>
								<span class="icon mr-2">
									<a href="https://www.amazon.com/" className="has-text-primary" target="_blank" rel="noreferrer">
										<i className="fa-brands fa-amazon"></i>
									</a>
								</span>
								<span class="icon">
									<a href="https://www.apple.com/" className="has-text-primary" target="_blank" rel="noreferrer">
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
				<div clasNames="container">
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
