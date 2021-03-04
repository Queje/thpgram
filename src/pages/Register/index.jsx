// import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';
// import { useDispatch } from 'react-redux';
// import CurrentUser from '../../stores/CurrentUser';

const Register =() => {
	// const history = useHistory();
	// const dispatch = useDispatch();

	const handleSubmit =(e) => {
		e.preventDefault();
		
		const userInput = {
			user: 
			{
				email: e.target[0].value,
				password: e.target[1].value
			}
		}

		fetch('http://localhost:3000/api/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userInput)
		})
		.then((response) => {
			if(response){
				Cookies.set('token', response.headers.get('Authorization').split(' ')[1]);
			} 
		}
			
		)
		// .then ((response) => {
		// 	if (response.user && response.user.confirmed) {
		// 	Cookies.set('token', response.jwt);
		// 	history.push('/')
		// 	dispatch(CurrentUser({
		// 		id: response.user.id,
		// 		username: response.user.username,
		// 		email: response.user.email,
		// 	}))} else {
		// 		alert(response.data[0].messages[0].message)
		// 		history.push('/register')
		// 	}
		// })
	}

	return(
			<section>
					<h2>Register</h2>
					<form onSubmit={handleSubmit}>
							<div className="form-group">
									<label >Email address</label>
									<input type="email" className="form-control" id="userEmail" aria-describedby="userEmail" required/>
									<small className="form-text text-muted">We'll never share your email with anyone else.</small>
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

export default Register;