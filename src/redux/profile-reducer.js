import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s, my first post', likesCount: 11},
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postsData.length + 1,
                message: action.newPostBody,
                likesCount: state.postsData.length + 1
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}
            debugger
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile  })
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
// Thunks:
export const getUserProfileThunk = (currUserId) => {
    return async (dispatch) => {
        const response = await usersAPI.getProfile(currUserId)
            dispatch(setUserProfile(response));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
      const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }
}

export default profileReducer