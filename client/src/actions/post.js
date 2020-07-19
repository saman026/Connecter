import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_POST,
  GET_ERRORS,
  DELETE_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  // CLEAR_ERRORS,
  // POST_LOADING,
} from "./types";

// export const addPost = (postData) => (dispatch) => {
//   dispatch(clearErrors());
//   axios
//     .post("/api/posts", postData)
//     .then((res) =>
//       dispatch({
//         type: ADD_POST,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

//GET posts

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

// // Add Like
// export const addLike = (id) => (dispatch) => {
//   axios
//     .post(`/api/posts/like/${id}`)
//     .then((res) => dispatch(getPosts()))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Remove Like
// export const removeLike = (id) => (dispatch) => {
//   axios
//     .post(`/api/posts/unlike/${id}`)
//     .then((res) => dispatch(getPosts()))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

//Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err },
    });
  }
};

//Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

//Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(setAlert("Post removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

//Add Post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

//GET post

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err },
    });
  }
};

//Add Comment
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

//Delete Comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
    dispatch(setAlert("Comment Deleted", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

// // Add Like
// export const addLike = (id) => (dispatch) => {
//   axios
//     .post(`/api/posts/like/${id}`)
//     .then((res) => dispatch(getPosts()))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Remove Like
// export const removeLike = (id) => (dispatch) => {
//   axios
//     .post(`/api/posts/unlike/${id}`)
//     .then((res) => dispatch(getPosts()))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

// // Set loading state
// export const setPostLoading = () => {
//   return {
//     type: POST_LOADING,
//   };
// };

// // Clear errors
// export const clearErrors = () => {
//   return {
//     type: CLEAR_ERRORS,
//   };
// };
