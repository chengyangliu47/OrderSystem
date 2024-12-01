import React from "react";
import { HashRouter as Router,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import BottomNav from "../components/BottomNav";

const AppRouter = () =>{
    return (
        <Router>
            <Routes>
                <Route exact path = "/" Component={Home}></Route>
            </Routes>
            <BottomNav/>
        </Router>
    )
}

export default AppRouter