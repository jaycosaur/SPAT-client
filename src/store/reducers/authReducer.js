const defaultState = {
    isLoading: false,
    isLoggedIn: false,
    loginError: false,
    loginErrorMessage: null,
    loginUserName: null,

    isAuthenticated: false,
    isAuthenticating: false,
    collapsed: true,
    currentLocation: "home",
    userType: "premium",
    authenticationErrorMessage: null,
    userData: null,
    isFetchingUserData: false,
    fetchUserDataError: false,
    fetchUserDataErrorMessage: null
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'LOGIN_PENDING':
            return {...state, isLoading: true, loginUserName: action.meta}
        case 'LOGIN_FULFILLED':
            return {...state, isLoading: false, isLoggedIn: true, isAuthenticated: true, userData: action.payload}
        case 'LOGIN_REJECTED':
            return {...state, isLoading: false, loginError: true, loginErrorMessage: action.payload}
        case 'LOGOUT_FULFILLED':
            return {...state, isAuthenticated: false}
        case 'LOGOUT_REJECTED':
            return {...state}
        case 'GET_CURRENT_SESSION_PENDING':
            return {...state, isAuthenticating: true}
        case 'GET_CURRENT_SESSION_FULFILLED':
            return {...state, isAuthenticating: false, isAuthenticated: true}
        case 'GET_CURRENT_SESSION_REJECTED':
            return {...state, isAuthenticating: false, authenticationErrorMessage: action.payload }
        case 'GET_CURRENT_USER_FULFILLED':
            return {...state, userData: action.payload}
        default: 
            return state
    }
}

