import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import DetailReducer from "./DetailReducer"; // combine multuple reducers

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: DetailReducer
})
export default rootReducer