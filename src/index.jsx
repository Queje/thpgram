import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Reducer from './stores/Reducer';
import Navbar from './components/Navbar/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';

const App =() => {

	return (
		<>
            <Provider store={Reducer}>
                <Router>
                    <Navbar/>
                    <main>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                            </Switch>
                        </main>
                </Router>
            </Provider>
		</>
	)
}

ReactDOM.render(<App />, document.querySelector("#root"));