import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";
import './index.css'

class Posts extends React.Component {

  state = {

  }

  componentDidMount = () => this.props.fetchPosts();

  render(){
    return(
      <div className="posts-container">
        <div>Posts</div>
        {this.props.posts && this.props.posts.length > 0 ? (
          this.props.posts.filter(pst => pst.userId === this.props.selectedUser.id).map(post => (
            <div className="post">{post.body}</div>
          ))
        ) : null}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
