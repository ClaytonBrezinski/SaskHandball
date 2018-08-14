import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Payments from './Components/Payments';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="background-image" />
				<div className="App">
					<img src={logo} className="App-logo" alt="logo" />
					<header className="App-header">
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to
						reload.
					</p>
					<Payments />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
