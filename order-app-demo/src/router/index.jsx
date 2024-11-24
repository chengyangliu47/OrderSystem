import React from "react";
import { HashRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Store from "../pages/Store";
import ProductDetail from "../pages/ProductDetail";
import CheckOut from "../pages/CheckOut";



const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" Component={ Store }> </Route>
                <Route exact path="/ProductDetail" Component={ ProductDetail }> </Route>
                <Route exact path="/CheckOut" Component={ CheckOut }> </Route>

            </Routes>
        </Router>
    )
}

export default AppRouter