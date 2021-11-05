import React from 'react'
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route} from "react-router-dom";

const App = () => (
    <div>
        <GlobalStyles/>
        <Route path={["/game/:id", "/"]}>
            {/* means  ["/game/:id","/"]} --> this will mean open Home page no matter what  */}
            <Home/>
        </Route>
    </div>
);

export default App;
