const defaultState = {
    selectedPackage: 2,
    showPackageFeatures: false,
    signupInformationForm: {},
    signupPasswordForm: {},
    signupConfirmForm: {},
    signupPage: 'information',
    signupSubmitLoading: false,
    signupSubmitError: false,
    signupSubmitErrorMessage: null,
    signupSubmitSuccess: false,
    signupSubmitSuccessResponse: null,
    signupConfirmLoading: false,
    signupConfirmError: false,
    signupConfirmErrorMessage: null,
    signupConfirmSuccess: false,
    signupConfirmSuccessResponse: null
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'SELECT_PRICE_PACKAGE':
            return {...state, selectedPackage: action.payload}
        case 'TOGGLE_PACKAGE_FEATURES':
            return {...state, showPackageFeatures: !state.showPackageFeatures}
        case 'SET_SIGNUP_INFORMATION':
            return {...state, signupInformationForm: action.payload, signupPage:'password'}
        case 'SET_SIGNUP_PASSWORD_PENDING':
            return {...state, signupPasswordForm: action.meta, signupSubmitLoading: true}
        case 'SET_SIGNUP_PASSWORD_FULFILLED':
            return {...state, signupPasswordForm: action.meta, signupSubmitLoading: false, signupSubmitSuccess: true, signupsubmitSuccessResponse: action.payload, signupPage:'confirm'}
        case 'SET_SIGNUP_PASSWORD_REJECTED':
            return {...state, signupPasswordForm: action.meta, signupSubmitLoading: false, signupSubmitError: true, signupSubmitErrorMessage: action.payload}
        case 'SET_SIGNUP_CONFIRM_PENDING':
            return {...state, signupConfirmForm: action.meta, signupConfirmLoading: true}
        case 'SET_SIGNUP_CONFIRM_FULFILLED':
            return {...state, signupConfirmForm: action.meta, signupConfirmLoading: false, signupConfirmSuccess: true, signupConfirmSuccessResponse: action.payload, signupPage:'success'}
        case 'SET_SIGNUP_CONFIRM_REJECTED':
            return {...state, signupConfirmForm: action.meta, signupConfirmLoading: false, signupConfirmError: true, signupConfirmErrorMessage: action.payload}
        case 'SET_SIGNUP_CONFIRM':
            return {...state, signupConfirmForm: action.payload, signupPage:'confirm'}
        default: 
            return state
    }
}

