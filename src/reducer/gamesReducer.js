import axios from 'axios';

const initialState = {
    popular: [],
    newGames: [],
    upcoming: []
};

const gamesReducer = (state = initialState,action) => {

    switch (action.type) {

        default:
            return {...state}
    }
};
export default gamesReducer;