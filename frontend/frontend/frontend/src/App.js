import React from 'react';
import './App.css';

import ArticleList from './components/ArticleList.js';
import Navbar from './components/Navbar.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				<h1>A React Django App</h1>
			</header>
			<ArticleList />
		</div>
	);
}

export default App;
