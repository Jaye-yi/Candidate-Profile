import { SEARCH, FETCH_ALL, CREATE, UPDATE, MARK } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchPost = (state) => async (dispatch) => {
  try {
     console.log("type!")
     const { data } = await api.searchPost(state);
     dispatch({ type: SEARCH, payload: data });
   } catch (error) {
     console.log(error.message);
   }
};

export const searchName = (name) => async (dispatch) => {
  try {
     console.log("type name!")
     const { data } = await api.searchName(name);
     dispatch({ type: SEARCH, payload: data });
   } catch (error) {
     console.log(error.message);
   }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("type create!")
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: MARK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

