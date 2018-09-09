import React from 'react';
import logo from 'app/assets/logo.gif'
import { connect } from "react-redux";

const Loading = WrappedComponent => props => {
  class LoadingWrapper extends React.Component{
    render(){
      return this.props[props].length === 0 ? <div> <img src={logo} /> </div> : <WrappedComponent {...this.props} />
    }
  }
  const mapStateToProps = state => ({
    users: state.users.users,
  })

  const mapDispatchToProps = () => ({

  })
  return connect(mapStateToProps, mapDispatchToProps)(LoadingWrapper)
}

export default Loading;
