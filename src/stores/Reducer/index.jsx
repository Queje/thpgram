import { createStore } from 'redux';

const initialState = {
    id: "not logged in",
    username: "not logged in",
    email: "not logged in",
 }

const Reducer = (state , payload) => {
    const { type, id, email } = payload;

    switch(type) {
        case 'CurrentUser':
            return state = {id, email};
        default:
            return state = initialState;
    }
    return state;
}

export default createStore(Reducer, 
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());