import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from './redux/mappingFunctions';
import Home from './components/home'
import { history } from './index'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
