import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
// const reducerOne = ( state, action ) => {
//     return state;
// }

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { createStore, combineReducers } from "redux";
// import rootReducer from './reducers/index';

// const reducerOne = (state = 111, action) => {
//     console.log("1:",state,action);
//     switch (action.type) {
//         case "HOME_ADD":
//             state += action.payload;
//             break;
//         case "HOME_SUB":
//             state = state - 11;
//             break;
//         default:
//             break;
//     }
//     // state = state + 10;
//     return state;
// }

// const reducerTwo = (state = 222, action) => {
//     console.log('2:',state,action);
    
//     switch (action.type) {
//         case "SHOWS_ADD":
//             state += action.payload;
//             break;
//         case "SHOWS_SUB":
//             state = state - 13;
//             break;
//         default:
//             break;
//     }
//     return state;
// }

// const store = createStore(combineReducers({home:reducerOne, shows:reducerTwo}),{});

// store.subscribe(()=>{
//   console.log('Store:',store.getState());
// });

// store.dispatch({type:"HOME_ADD",payload:12});


// redux
// why redux
// architecture
// store
// action
// action creator
