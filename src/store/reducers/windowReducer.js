const defaultState = {
    window: {},
    device: null
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'SET_WINDOW_DIMENSIONS':
            let device = null
            switch(true){
                case (action.payload.width>1800):
                    device = "bigdesktop"
                    break
                case (action.payload.width>1200):
                    device = "desktop"
                    break
                case (action.payload.width>900):
                    device = "tabletlandscape"
                    break
                case (action.payload.width>1800):
                    device = "tabletportrait"
                    break
                default:
                    device = "mobile"
            }
            return {...state, window: {...action.payload}, device}
        default: 
            return state
    }
}

