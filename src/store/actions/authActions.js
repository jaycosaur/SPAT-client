import { Auth } from "aws-amplify"

export const login = (e) => {
    return {
        type: 'LOGIN',
        payload: Auth.signIn(e.userName, e.password),
        meta: e.userName
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: Auth.signOut()
    }
}

export const getCurrentSession = () => {
    return {
        type: 'GET_CURRENT_SESSION',
        payload: Auth.currentSession()
    }
}

export const getCurrentUser = () => {
    return {
        type: 'GET_CURRENT_USER',
        payload: Auth.currentAuthenticatedUser()
    }
}

