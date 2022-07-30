// import logo from './logo.svg';
// import logo from './assets/images/RandoMarvel_Logo_Red.png';
import './App.css';
import './assets/styles/styles.sass';

function App() {
	return (
		<div>
			<div className="main">
				<div className="section">
					<div className="columns is-centered">
						<div className="column is-half has-text-centered">
							<figure className="image is-128wide is-inline-block">
								<img src="/assets/images/logo.svg" alt="RandoMarvel Logo" />
							</figure>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-half has-text-centered">
							<h1 className="has-text-primary is-size-5">Randomly pick your movie starting soon</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
