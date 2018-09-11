import { Auth } from 'aws-amplify'

export const selectPricePackage = (item) => {
    return {
        type: 'SELECT_PRICE_PACKAGE',
        payload: item
    }
}

export const togglePackageFeatures = () => {
    return {
        type: 'TOGGLE_PACKAGE_FEATURES'
    }
}

export const handleInformationSubmit = (e) => {
    return {
        type: 'SET_SIGNUP_INFORMATION',
        payload: e
    }
}

export const handlePasswordSubmit = (e, info, planType) => {
    const {userName, ...attributes} = info
    return {
        type: 'SET_SIGNUP_PASSWORD',
        payload: Auth.signUp({
            username: userName,
            password: e.password,
            attributes: {
                phone_number: String(attributes.phoneNumber),
                given_name: String(attributes.givenName),
                family_name: String(attributes.familyName),
                planType: String(planType),
                organisation: String(attributes.organisation),
            }
        }),
        meta: e
    }
}

export const handleConfirmSubmit = (e, info) => {
    const { userName } = info
    return {
        type: 'SET_SIGNUP_CONFIRM',
        payload: Auth.confirmSignUp(userName, e.confirmationCode),
        meta: e
    }
}
