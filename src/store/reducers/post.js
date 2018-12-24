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
        default: {
            return state;
        }
    }
}

export default post;