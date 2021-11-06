const INITIAL_STATE = {
    game: {},
    screenshots: {},
    isLoading: true
}

const DetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DETAIL': {
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
        }
        case 'LOADING_DETAIL': {
            return {
                ...state, // this means the program is loading.
                isLoading: true
            }
        }

        default:
            return {...state}
    }
}
export default DetailsReducer