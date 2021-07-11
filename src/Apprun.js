import React from 'react';
import "./App.css";
import Navhai from './Movies/Navhai';
import Footer from "./Movies/Footer";
import { Route, Switch } from 'react-router-dom';
import Home from './Movies/Home';
import Contact from './Movies/Contact';
import Watchlist from './Movies/Watchlist';

const Apprun = () => {
    return (
        <div className="App">
            <h1> Movies App </h1>
            <Navhai />
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/watch"> <Watchlist /> </Route>
            <Route path="/contact"> <Contact /> </Route>
        </Switch>

            <Footer />
        </div>
    );
};

export default Apprun;