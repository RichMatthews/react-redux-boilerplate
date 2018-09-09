import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import reducer from "app/redux/reducers";
import registerServiceWorker from "./registerServiceWorker";
/* eslint-disable */
const confirmMiddleware = store => next => action => {
    if(action.reqConfirm){
      if(confirm('are you sure?')){
        next(action)
      }
    }
    else {
      next(action)
    }
}

const enhancers = [applyMiddleware(thunk, confirmMiddleware)];
const enhancer = compose(
  ...enhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



const store = createStore(reducer, enhancer);

function listener() {
  console.log(store.getState(), "store state");
}

store.subscribe(listener);

class Component extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("root"));
registerServiceWorker();
