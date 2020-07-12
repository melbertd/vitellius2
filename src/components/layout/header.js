
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink 
} from "react-router-dom";

export default function Header() {

	return (

		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="container">
					<Link cclassName="navbar-brand" to="/">
						<center>
							<img className="logo-header" src={"images/vli.png"} />
						</center>
					</Link>
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li>
								<NavLink  exact activeClassName="selected" className="nav-link" to="/">Home</NavLink >
							</li>
							<li>
								<NavLink  exact activeClassName="selected" className="nav-link" to="/services">Services</NavLink >
							</li>
							<li>
								<NavLink  exact activeClassName="selected" className="nav-link" to="/about">About Us</NavLink >
							</li>
							<li>
								<NavLink  exact activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink >
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="topnav-border-style"></div>
		</div>
	)
}