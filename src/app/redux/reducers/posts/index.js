import { FETCH_POSTS } from "app/redux/types";
const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  console.log(action,' accccc');
  switch (action.type) {
    case FETCH_POSTS: {
      return [].concat(...state.posts).concat(action.postsData)
    }
    case CREATE_POSTS: {
      return [].concat(...state.posts).concat(action.post)
    }
    default:
      return state;
  }
};
