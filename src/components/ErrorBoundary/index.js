import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch = (error, info) => {
    console.log("the error is: ", error);
    console.log("the info is: ", info);
  };

  render() {
    if (this.state.hasError) {
      return <div> Something went wrong </div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
