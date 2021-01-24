import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// reducer to hold data from the users input
// on the Feelings page
const feelingReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return action.payload;
    case "CLEAR":
      return (state = 0);
    default:
      return state;
  }
};

// reducer to hold data from the users input
// on the Understanding page
const understandingReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_UNDERSTANDING":
      return action.payload;
    case "CLEAR":
      return (state = 0);
    default:
      return state;
  }
};

// reducer to hold data from the users input
// on the Support page
const supportReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_SUPPORT":
      return action.payload;
    case "CLEAR":
      return (state = 0);
    default:
      return state;
  }
};

// reducer to hold data from the users input
// on the Comments page
const commentsReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_COMMENTS":
      return action.payload;
    case "CLEAR":
      return (state = "");
    default:
      return state;
  }
};


// combines the reducers into one reducer to rule them all:
// redux store
const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

//  Wrap App in provider
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
