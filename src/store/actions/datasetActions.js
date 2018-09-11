import { API } from 'aws-amplify'

export const fetchDatasets = (datasetId) => {
    return {
        type: 'FETCH_DATASETS',
        payload: API.get("spat",`/datasets`)
    }
}