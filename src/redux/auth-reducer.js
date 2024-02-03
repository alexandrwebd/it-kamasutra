import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_USER_AVATAR = 'SET_USER_AVATAR'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAvatar: null
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                userAvatar: action.userAvatar
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const setAuthUserAvatar = (userAvatar) => ({type: SET_USER_AVATAR, userAvatar})

export const getAuthUserThunk = () => {
    return async (dispatch) => {
        const response = await authAPI.authUser()

        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
            //засетать фото пользователя и вывести его в место Logo
            usersAPI.getProfile(id).then((data) => {
                dispatch(setAuthUserAvatar(data.photos.small));
            });
        }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserThunk())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                console.log(message)
                dispatch(stopSubmit('login', {_error: message}))
            }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}


export default authReducer