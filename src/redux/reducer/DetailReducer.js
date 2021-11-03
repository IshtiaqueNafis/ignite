const INITIAL_STATE = {
    game: {},
    screenshots:{}
}

const DetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DETAIL': {
            return {
                ...state,
                game: action.payload.game,
                screen:action.payload.screen
            }
        }

        default:
            return {...state}
    }
}
export  default  DetailsReducer