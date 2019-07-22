import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Set up object to hold opening values for the feedback form

let feedbackObject = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments:'',
}

// Set up object to check if all feedback is complete before submitting

let completeCheck = {
    feelings: false,
    understanding: false,
    support: false,
    comments: false,
}
// reducers will go here!!

const formReducer = (state = feedbackObject, action) => {

    if (action.type === 'FEELINGS_DATA') {
        state.feelings = action.payload;
      return state;
    }
    if (action.type === 'UNDERSTANDING_DATA') {
        state.feelings = action.payload;
        return state;
    }

}

const checkCompletedForm = ( state = completeCheck, action ) => {
    if (action.type === 'FEELINGS_DONE'){
        state.feelings = action.payload;
      return state;
    }
    if (action.type === 'UNDERSTANDING_DONE'){
        state.understanding = action.payload;
      return state;
    }

}

const reduxStore = createStore(
    combineReducers({
        // all reducers will get called into here...
        formReducer,
        checkCompletedForm,

    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
