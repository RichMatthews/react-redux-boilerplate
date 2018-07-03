import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux/mappingFunctions";
import Wrapper from "./components/Wrapper";
import ErrorBoundary from "./components/ErrorBoundary";

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
