import { API } from "aws-amplify"

export const getLatestNews = () => {
    return {
        type: 'GET_LATEST_NEWS',
        payload: API.get('spat', '/news/latest'),
    }
}
