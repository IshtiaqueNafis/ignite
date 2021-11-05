import React from 'react';

import styled from "styled-components";
import {motion} from 'framer-motion/dist/framer-motion'
import {useSelector} from "react-redux";

const GameDetail = () => {
    const {screen, game} = useSelector(state => state.detail)


    //region const {screen, game}
    /*
    const rootReducer = combineReducers({
    games: gamesReducer,
    detail: DetailReducer
}) this is getting the state details for the game
     */
    //endregion

    return (
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating:{game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <PlatForms>
                            {game.platforms && game.platforms.map(data => (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </PlatForms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt={game.background_image}/>
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>

                <div className="gallery">
                    {screen.results && screen.results.map(screen=>(
                        <img src={screen.image} alt="game"/>
                    ))}
                </div>
            </Detail>

        </CardShadow>
    );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;

  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;


  }

  &::-webkit-scrollbar {
    background: white;

  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }

`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Info = styled(motion.div)`
  text-align: center;
`

const PlatForms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;

  }
`
const Media = styled(motion.div)`
  margin-top: 5em;

  img {
    width: 100%;


  }
`
const Description = styled(motion.div)`
  margin: 5rem 0rem;

`


export default GameDetail
