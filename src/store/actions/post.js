import axios from './axios';
import * as actionTypes from '../actions/actionTypes'

export const getPosts = (postsSize) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    return (dispatch) => {
        axios.get(`posts/?_sort=id&_order=desc&_start=0&_end=${postsSize}`, { headers })
            .then((resp) => { 
                dispatch({
                    type: actionTypes.GET_POSTS,
                    payload:  resp.data
                })
            })
    }
}

export const newPost = (postData) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    return (dispatch) => {
        axios.post('posts/',  postData)
            .then((resp) => { 
                dispatch(getPosts(10))
            })
    }
}
