const objectDefault = {
    isLoading: false,
    isError: false,
    errorMessage: null,
    items: [],
    lastFetch: null
}

const defaultState = {
    news: objectDefault
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'GET_LATEST_NEWS_PENDING':
            return {...state, news: {
                ...state.news,
                isLoading: true
            }}
        case 'GET_LATEST_NEWS_FULFILLED':
            return {...state, news:{
                ...state.news,
                isLoading: false,
                lastFetch: Date.now(),
                items: action.payload
            }}
        case 'GET_LATEST_NEWS_REJECTED':
            return {...state, news:{
                ...state.news,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }}
        default: 
            return state
    }
}

