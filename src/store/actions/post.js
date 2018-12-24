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

export const getPost = (postId) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    return (dispatch) => {
        axios.get(`posts/${postId}`, { headers })
            .then((resp) => { 
                dispatch({
                    type: actionTypes.GET_POST,
                    payload:  resp.data
                })
            })
    }
}


export const newPost = (postData) => {
    return (dispatch) => {
        axios.post('posts/',  postData)
            .then((resp) => { 
                dispatch({
                    type: actionTypes.ADD_POST,
                    payload:  resp.data
                })
            })
    }
}

export const getComments = (postId, commentsCount) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    return (dispatch) => {
        axios.get(`posts/${postId}/comments/?_start=0&_end=${commentsCount}`, { headers })
            .then((resp) => { 
                dispatch({
                    type: actionTypes.GET_COMMENTS,
                    payload:  resp.data
                })
            })
    }
}
