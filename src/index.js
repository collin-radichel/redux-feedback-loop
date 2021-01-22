import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


const feelingReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return action.payload;
    default:
      return state;
  }
};


const understandingReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_UNDERSTANDING":
      return action.payload;
    default:
      return state;
  }
};


const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD_SUPPORT":
            return action.payload;
        default:
            return state;
    }
};


const commentsReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD_COMMENTS":
            return action.payload;
        default:
            return state;
    }
};


// const reviewReducer = (state = [], action) => {
//     switch (action.type) {
//         case value:

//         default:
//             return state;
//     }
// }

const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
    // reviewReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
