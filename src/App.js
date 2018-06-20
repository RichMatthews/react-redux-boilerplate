import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";
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
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path={`/categories/${chosenCategory.category}`} exact component={Products} />
          <Route
            path={`/categories/${chosenCategory.category}/${chosenCategory.product}`}
            component={ProductPage}
          />
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
