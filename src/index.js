// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore, combineReducers } from "redux";

const reducerOne = (state={}, action) => {
    switch (action.type) {
        case 'ADD':
            state = {state,...action.payload};
            break;
        default:
            break;
    }
    return state;
}

const reducerTwo = (state={}, action) => {
    switch (action.type) {
        case 'SUB':
            state = {state,...action.payload};
            break;
        default:
            break;
    }
    return state;
}


const reducerThree = (state={}, action) => {
    switch (action.type) {
        case 'SUBS':
            state = {state,...action.payload};
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(combineReducers({reducerOne,reducerTwo,reducerThree}));

store.subscribe(()=>{
    console.log('Store:',store.getState());
})

store.dispatch({type:'ADD',payload:{home:"Data"}});

store.dispatch({type:'SUB',payload:{home:"Data1"}});

store.dispatch({type:'ADD',payload:{home:"Data2"}});
