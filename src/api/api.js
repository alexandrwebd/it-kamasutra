import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    'API-KEY': '87c5222e-452a-4d94-b93b-6931e0787098'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(currUserId) { // Перенаправление (делегирование) на другой метод
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(currUserId)
    }
}

export const profileAPI = {
    getProfile(currUserId) {
        return instance.get(`profile/` + currUserId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    authUser () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}
