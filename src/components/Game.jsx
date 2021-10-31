import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion/dist/framer-motion'

const Game = ({name, released, image}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{released}</h3>
            <h3>{image}</h3>
        </div>
    );
};

const styledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;

  }`

export default Game;