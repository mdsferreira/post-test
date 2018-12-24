import * as actionTypes from '../actions/actionTypes'
const initialState = {
    postList: [],    
}

const post = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS: {
            return {
                ...state,
                postList: action.payload,
            }
        } 
        case actionTypes.GET_POST: {
            return {
                ...state,
                post: action.payload,
            }
        } 
        case actionTypes.GET_COMMENTS: {
            return {
                ...state,
                commentList: action.payload,
            }
        }      
        case actionTypes.ADD_POST: {
            return {
                ...state,
                postList: [action.payload, ...state.postList],
            }
        }         
        default: {
            return state;
        }
    }
}

export default post;