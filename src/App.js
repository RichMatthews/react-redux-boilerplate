import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router-dom";
import Home from '../src/components/home';
import Categories from '../src/components/Categories';
import Products from '../src/components/Products';
import ProductPage from '../src/components/ProductPage';
import { mapStateToProps, mapDispatchToProps } from './redux/mappingFunctions';
import { history } from './index'
import './App.css';

class App extends React.Component {
  render() {
    const { chosenCategory } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              exact
              path="/categories"
              render={(props) => <Categories {...props} />}
            />
            <Route
              exact
              path={`/categories/${chosenCategory.category}`}
              render={(props) => <Products {...props} />}
            />
            <Route
              exact
              path={`/categories/${chosenCategory.category}/${chosenCategory.product}`}
              component={ProductPage}
            />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
