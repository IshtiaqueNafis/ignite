import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer"; // combine multuple reducers

const rootReducer = combineReducers({
    games: gamesReducer,
})
export default rootReducer