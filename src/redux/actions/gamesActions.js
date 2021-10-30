import axios from 'axios';
import {NewGamesUrl, popularGamesUrl, UpcomingGamesUrl,} from "../../api";


export const loadgames = () => async (dispatch) => {

    const popularData = await axios.get(popularGamesUrl())
    const upcomingData = await axios.get(UpcomingGamesUrl())
    const newData = await axios.get(NewGamesUrl())
    dispatch(
        {
            type: 'FETCH_GAMES',
            payload: {
                popular: popularData.data.results,
                upcomingData: upcomingData.data.results,
                newData: newData.data.results,

            }
        },
    )
}