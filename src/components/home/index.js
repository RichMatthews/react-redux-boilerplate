import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions'

class Home extends React.Component {
    render(){
      return(
        <div>
          Home is here
          <button onClick={() => this.props.fetchUsers([{name: 'mike'}, {name: 'mark'}])}>Fetch Users</button>
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
