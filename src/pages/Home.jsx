import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadgames} from "../redux/actions/gamesActions";
import styled from "styled-components";
import {motion} from 'framer-motion/dist/framer-motion'
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import {useLocation} from "react-router-dom";


const Home = () => {
    const location = useLocation(); // ==> useLocation hook returns the location object that represents the current URL
    const pathId = location.pathname.split("/")[2]; // --> so this is the path.name
    //path is part of location.

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
            {pathId && <GameDetail/>}
            <h2>Upcoming games </h2>
            <Games>
                {upcoming.map(game => (
                    <Game key={game.id}
                          name={game.name}
                          released={game.released} id={game.id}
                          image={game.background_image}

                    />
                ))}
            </Games>
        </GameList>
    );
};
const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;


`


export default Home;
