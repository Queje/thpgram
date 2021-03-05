import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import CurrentUser from '../../stores/CurrentUser/index';

const Navbar =() => {
	const getCurrentUser = (state) => state;
	const {islogged} = useSelector(getCurrentUser);
	const history = useHistory();
	const dispatch = useDispatch();
	
	const handleLogout=(e)=>{
		e.preventDefault();
		Cookies.remove('token');
		history.push('/');
		dispatch(CurrentUser({
			id: "not logged in",
			email: "not logged in",
			islogged: false
		}))
	}

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
				{(islogged === true) ? (
					<button className="btn btn-outline-secondary" onClick={handleLogout}>Log out</button>
				) : ( 
					<Link className="btn btn-outline-secondary" to="/login">Log in</Link>
				)}		
			</div>
		</nav>
	)
}

export default Navbar;