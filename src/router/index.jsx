import React from "react";
import { HashRouter as Router,Route,Routes } from "react-router-dom";
import Store from "../pages/Store";
import CheckOut from "../pages/CheckOut";

const AppRouter = () =>{
    return (
        <Router>
            <Routes>
                <Route exact path = "/" Component={Store}></Route>
                <Route path = "/checkout" Component = {CheckOut}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter