import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {loadgames} from "./actions/gamesActions";



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgames())
    })

    return (
        <div className="App">

        </div>
    );
}

export default App;
