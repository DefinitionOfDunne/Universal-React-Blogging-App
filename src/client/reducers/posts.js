// import {
//     FETCH_POST,
//     FETCH_POST_SUCCESS,
//     FETCH_POST_FAILURE,
//     RESET_ACTIVE_POST
// } from '../actions/posts';

// const INITIAL_STATE = { postsList: {posts: [], error:null, loading: false},  
//                             newPost:{post:null, error: null, loading: false}, 
//                             activePost:{post:null, error:null, loading: false}, 
//                             deletedPost: {post: null, error:null, loading: false},
//                         };
                        
// export default function(state = INITIAL_STATE, action) {
//     let error;
//     switch (action.type) {
//         case FETCH_POST:
//             return {...state, activePost: {...state.activePost, loading: true } };
//         case FETCH_POST_SUCCESS:
//             return {...state, activePost: { post: action.payload.data, error: null, loading: false } };
//         case FETCH_POST_FAILURE:
//             error = action.payload.data || { message: action.payload.message };
//             return {...state, activePost: { post: null, error: error, loading: false } };
//         case RESET_ACTIVE_POST:
//             return {...state, activePost: { post: null, error: null, loading: false } };
//         }
//         return state; 
//     };
