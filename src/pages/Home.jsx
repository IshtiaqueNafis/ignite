import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadgames} from "../redux/actions/gamesActions";
import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion'


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgames())
    }, [dispatch]) // use effect will only run when the dispatch happends.
    const {popular, newGames, upcoming} = useSelector(state => state.games);

    //region
    /*
    const rootReducer = combineReducers({
    games: gamesReducer,
})
this is where the games is coming from
     */
    //endregion

    return (
        <GameList>
            <h1>hello</h1>
            <Games>

            </Games>
        </GameList>
    );
};
const GameList = styled(motion.div)``;
const Games = styled(motion.div)``




export default Home;
