import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="nav">
				<Router>
					<div className="links">
						<ul>
							<li>
								<a className="title" href="#news">
									Blog
								</a>
							</li>
							<li>
								<a href="#news">News</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
						</ul>
					</div>
				</Router>
			</div>
		);
	}
}

export default Navbar;
