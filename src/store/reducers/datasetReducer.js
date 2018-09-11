const defaultState = {
    datasets: [],
    isFetching: false,
    isError: false,
    errorMessage: null
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'FETCH_DATASETS_PENDING':
            return {...state, isFetching: true}
        case 'FETCH_DATASETS_FULFILLED':
            return {...state, isFetching: false, lastFetch: Date.now(), datasets: action.payload}
        default: 
            return state
    }
}

