import { createStore } from 'redux';

const initialState = {
    id: "not logged in",
    email: "not logged in",
    islogged: false
}

const Reducer = (state , payload) => {
    const { type, id, email, islogged } = payload;

    switch(type) {
        case 'CurrentUser':
            return state = {id, email, islogged};
        default:
            return state = initialState;
    }
}

export default createStore(Reducer, 
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());