// import axios from 'axios';

// export const FETCH_POST = 'FETCH_POST';
// export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
// export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
// export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';


// export function fetchPost(id) {
//   const request = axios.get(`${ROOT_URL}/posts/${id}`);

//   return {
//     type: FETCH_POST,
//     payload: request
//   };
// }


// export function fetchPostSuccess(activePost) {
//   return {
//     type: FETCH_POST_SUCCESS,
//     payload: activePost
//   };
// }

// export function fetchPostFailure(error) {
//   return {
//     type: FETCH_POST_FAILURE,
//     payload: error
//   };
// }

// export function resetActivePost() {
//   return {
//     type: RESET_ACTIVE_POST
//   }
// };