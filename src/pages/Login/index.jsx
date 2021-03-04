import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import CurrentUser from '../../stores/CurrentUser/index';


const Login =() => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleLogin=(e) => {
		e.preventDefault();
		
		const userInput = {
			user: {
				email: e.target[0].value,
				password: e.target[1].value
			}
		}

		fetch('http://localhost:3000/api/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userInput)
		})
		.then ((response) => {
			if(response.status === 200){
				Cookies.set('token', response.headers.get('Authorization').split(' ')[1]);
				return response.json()
			}})
		.then ((response) => {
			history.push('/')
			dispatch(CurrentUser({
				id: response.data.attributes.id,
				email: response.data.attributes.email,
			}))
		})
	}

	return(
		<section>
			<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<div className="form-group">
						<label>Username / Email</label>
						<input type="text" className="form-control" id="username" aria-describedby="username" required/>
					</div>
					<div className="form-group">
						<label >Password</label>
						<input type="password" className="form-control" id="userPassword" required/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
		</section>
	)
}

export default Login;