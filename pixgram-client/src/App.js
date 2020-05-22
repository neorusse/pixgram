import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from './services/auth.service';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	const logOut = () => {
		AuthService.logout();
	};

	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={'/'} className="navbar-brand">
						PixGram
					</Link>
					{currentUser ? (
						<div className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={'/profile'} className="nav-link">
									{`${currentUser.user.firstname.toUpperCase()} ${currentUser.user.lastname.toUpperCase()}`}
								</Link>
							</li>
							<li className="nav-item">
								<a href="/login" className="nav-link" onClick={logOut}>
									LogOut
								</a>
							</li>
						</div>
					) : (
						<div className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={'/login'} className="nav-link">
									Login
								</Link>
							</li>

							<li className="nav-item">
								<Link to={'/register'} className="nav-link">
									Sign Up
								</Link>
							</li>
						</div>
					)}
				</nav>

				<div className="container mt-3">
					<Switch>
						<Route exact path={['/']} component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
