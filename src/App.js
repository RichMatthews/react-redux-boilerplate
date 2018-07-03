import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";
import Wrapper from "app/components/Wrapper";
import ErrorBoundary from "app/components/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Wrapper />
        </ErrorBoundary>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
