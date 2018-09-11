const filtersDefault = {
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
}


const defaultState = {
    fullscreen: false,
    filterShow: false,
    dashboard: "enterprise",
    filters: filtersDefault,
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
        case 'TOGGLE_FILTER_DISPLAY':
            return {...state, filterShow: !state.filterShow}    
        case 'CHANGE_DASHBOARD':
            return {...state, dashboard: action.payload}  
        case 'SET_DATASET_ID':
            return {...state, datasetId: action.payload}
        case 'FILTER_RESET':
            return {...state, filters: filtersDefault}
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
                vendors: {
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
                    info: {...action.payload},
                    fetchTime: Date.now(),
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
                    path: action.meta.path,
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
                    hasData: true,
                    fetchTime: Date.now()
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
        case 'CHART_DRILL_DOWN':
            return {...state, dataQueries: {
                ...state.dataQueries,
                [action.payload] : {
                    ...state.dataQueries[action.payload],
                    drillLevel: !state.dataQueries[action.payload].drillLevel?1:((state.dataQueries[action.payload].drillLevel&&state.dataQueries[action.payload].drillLevel<4)?state.dataQueries[action.payload].drillLevel + 1:4)
                }
            }}
        case 'CHART_DRILL_UP':
            return {...state, dataQueries: {
                ...state.dataQueries,
                [action.payload] : {
                    ...state.dataQueries[action.payload],
                    drillLevel: state.dataQueries[action.payload].drillLevel&&state.dataQueries[action.payload].drillLevel>0?state.dataQueries[action.payload].drillLevel - 1:0
                }
            }}


            
        default: 
            return state
    }
}

