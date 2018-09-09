import axios from 'axios';
import { FETCH_POSTS, CREATE_POSTS } from "app/redux/types";

export const fetchPosts = () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/posts");

  return async (dispatch, getState) => {
    try {
      const posts = await request;
      const postsData = posts.data;
      dispatch({ type: FETCH_POSTS, postsData });
    } catch (err) {
      // dispatch({ type: FETCHING_USERS_FAILED, err });
    }
  };
};

export const createPost = (postData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_POSTS, postData });
    } catch (err) {
      // dispatch({ type: FETCHING_USERS_FAILED, err });
    }
  };
}
