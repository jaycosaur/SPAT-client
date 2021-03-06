import { API } from 'aws-amplify'

export const resetStateToDefault = () => {
    return {
        type: 'RESET_STATE_TO_DEFAULT'
    }
}

export const toggleFullscreen = (force) => {
    return {
        type: 'TOGGLE_FULLSCREEN',
    }
}

export const toggleFilterShow = () => {
    return {
        type: 'TOGGLE_FILTER_DISPLAY',
    }
}

export const fetchDatasetInformation = (datasetId) => {
    return {
        type: 'FETCH_DATASET_INFORMATION',
        payload: API.get("spat",`/datasets/${datasetId}`)
    }
}

export const handleDashboardChange = (e) => {
    return {
        type: 'CHANGE_DASHBOARD',
        payload: e
    }
}

export const setDatasetId = (datasetId) => {
    return {
        type: 'SET_DATASET_ID',
        payload: datasetId
    }
}

// FILTERS

export const clearFilter = (e) => {
    return {
        type: 'FILTER_RESET'
    }
}

export const filterSelectVendor = (e) => {
    return {
        type: 'FILTER_SELECT_VENDOR',
        payload: e
    }
}

export const filterDeselectVendor = (e) => {
    return {
        type: 'FILTER_DESELECT_VENDOR',
        payload: e
    }
}

export const filterSelectCategory = (e) => {
    return {
        type: 'FILTER_SELECT_CATEGORY',
        payload: e
    }
}

export const filterDeselectCategory = (e) => {
    return {
        type: 'FILTER_DESELECT_CATEGORY',
        payload: e
    }
}

export const filterSelectTime = (e) => {
    return {
        type: 'FILTER_SELECT_TIME',
        payload: e
    }
}

export const filterDeselectTime = (e) => {
    return {
        type: 'FILTER_DESELECT_TIME',
        payload: e
    }
}

export const removeFilter = (e) => {
    return {
        type: 'FILTER_REMOVE',
        payload: e
    }
}

export const fetchDataQuery = (storeLocation, path, filters) => {
    return {
        type: 'FETCH_DATASET_QUERY',
        meta: {chartKey: storeLocation, path: path, filters:filters},
        payload: API.post("spat", path, {
            body: {filters:filters}
        })
    }
}

export const handleDrillDown = (storeLocation) => {
    return {
        type: 'CHART_DRILL_DOWN',
        payload: storeLocation
    }
}

export const handleDrillUp = (storeLocation) => {
    return {
        type: 'CHART_DRILL_UP',
        payload: storeLocation
    }
}

