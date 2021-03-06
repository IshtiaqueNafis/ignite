const initialState = {
    popular: [],
    newGames: [],
    upcoming: []
};

const gamesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_GAMES": {
            return {
                ...state, // copy the current state and update the popular data.
                popular: action.payload.popular,
                newGames: action.payload.newData,
                upcoming: action.payload.upcomingData
            }
        }


        default:
            return {...state}
    }
};
export default gamesReducer;