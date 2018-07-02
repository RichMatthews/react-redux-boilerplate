import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import "./index.css";
import App from "./App";
import reducer from "./redux/reducers";
import registerServiceWorker from "./registerServiceWorker";

export const history = createHistory();
const enhancers = [applyMiddleware(thunk)];
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
