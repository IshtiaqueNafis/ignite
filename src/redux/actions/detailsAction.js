import axios from "axios";
import {gameDetailsUrl, GameScreenshotURL} from "../../api";

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenData = await axios.get(GameScreenshotURL(id));

    dispatch({
        type: 'LOADING_DETAIL'
    })

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenData.data
        }

    });
}