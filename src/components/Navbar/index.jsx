import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useEffect} from 'react';

const Navbar =() => {

	useEffect(()=>{Cookies.get('token')},[]);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Home</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
					<Link className="nav-link" to="/register">Register</Link>
				</div>
                <div className="navbar-nav">
					<Link className="nav-link" to="/profile/me">Your Account</Link>
				</div>
				<div className="navbar-nav">
					<Link className="nav-link" to="/post">New Post</Link>
				</div>
			</div>
			<div className="navbar-nav">
				{(Cookies.get('token')) ? (
					<button className="btn btn-outline-secondary" onClick="#">Log out</button>
				) : ( 
					<Link className="btn btn-outline-secondary" to="/login">Log in</Link>
				)}		
			</div>
		</nav>
	)
}

export default Navbar;