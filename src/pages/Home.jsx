import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {loadgames} from "../actions/gamesActions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgames())
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
