
const defaultState = {
    fullscreen: false,
    dashboard: "enterprise",
    filters: {
        vendors: {
            active: false,
            type: null,
            items: []
        },
        category: {
            active: false,
            type: null,
            items: []
        },
        time: {
            active: false,
            type: null,
            to: null,
            from: null
        },
        location: {
            active: false,
            type: null,
            items: []
        },
        account: {
            active: false,
            type: null,
            items: []
        }
    },
    drilldown: {
        vendors: {
            active: false,
            type: null,
            items: []
        },
        category: {
            active: false,
            type: null,
            items: []
        },
        time: {
            active: false,
            type: null,
            to: {},
            from: {}
        },
        location: {
            active: false,
            type: null,
            items: []
        },
        account: {
            active: false,
            type: null,
            items: []
        }
    },
    datasetId: null,
    dataset: {},
    dataQueries: {}
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}    
        case 'TOGGLE_FULLSCREEN':
            return {...state, fullscreen: !state.fullscreen}    
        case 'CHANGE_DASHBOARD':
            return {...state, dashboard: action.payload}  
        case 'SET_DATASET_ID':
            return {...state, datasetId: action.payload}
        case 'FILTER_SELECT_TIME': 
            return {
                ...state, 
                filters: {
                    ...state.filters,
                    time: {
                        active: true,
                        type: "include",
                        to: Math.round(action.payload.length>1?action.payload[1]:action.payload[0]),
                        from: Math.round(action.payload[0])
                    }
                }
        }
        case 'FILTER_DESELECT_TIME': 
            return {...state, filters: {
                ...state.filters,
                time: {
                    active: false,
                    type: null,
                    to: null,
                    from: null
            }}} 

        case 'FILTER_SELECT_CATEGORY': 
            return {
                ...state, 
                filters: {
                    ...state.filters,
                    category: {
                        active: true,
                        type: "include",
                        items: [...action.payload]
                    }
                }
        }
        case 'FILTER_DESELECT_CATEGORY': 
            return {...state, filters: {
                ...state.filters,
                category: {
                    active: false,
                    type: null,
                    items: []
            }}} 
        case 'FILTER_SELECT_VENDOR': 
            return {
                ...state, 
                filters: {
                    ...state.filters,
                    vendors: {
                        active: true,
                        type: "include",
                        items: [...action.payload]
                    }
                }
        }
        case 'FILTER_DESELECT_VENDOR': 
            return {...state, filters: {
                ...state.filters,
                vendor: {
                    active: false,
                    type: null,
                    items: []
            }}} 

        case 'FETCH_DATASET_INFORMATION_PENDING':
            return {...state, dataset: {...state.dataset, isFetching: true, isRejected: false,}}
        case 'FETCH_DATASET_INFORMATION_FULFILLED':
            return {...state, dataset: 
                {
                    ...state.dataset, 
                    isFetching: false, 
                    info: {...action.payload}
                }
            }
        case 'FETCH_DATASET_INFORMATION_REJECTED':
            return {...state, dataset: {...state.dataset, isFetching: false, isRejected: true}}


        case 'FETCH_DATASET_QUERY_PENDING':
            return {...state, dataQueries: {
                ...state.dataQueries,
                [action.meta.chartKey] : {
                    ...state.dataQueries[action.meta.chartKey],
                    isLoading: true,
                    isError: false,
                    path: action.meta.path
                }
                }
            }
        case 'FETCH_DATASET_QUERY_FULFILLED':
            return {...state, dataQueries: {
                ...state.dataQueries,
                [action.meta.chartKey] : {
                    ...state.dataQueries[action.meta.chartKey],
                    isLoading: false,
                    data: action.payload,
                    hasData: true
                }
                }
            }
        case 'FETCH_DATASET_QUERY_REJECTED':
            return {...state, dataQueries: {
                ...state.dataQueries,
                [action.meta.chartKey] : {
                    ...state.dataQueries[action.meta.chartKey],
                    isLoading: false,
                    isError: true,
                    errorMessage: action.payload
                }
            }}
        default: 
            return state
    }
}

