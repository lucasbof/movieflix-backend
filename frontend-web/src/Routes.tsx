import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/NavBar';
import history from './core/utils/history';
import Home from 'pages/Home';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import MoviesRoutes from 'pages/Movies/Routes/MoviesRoutes';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <MoviesRoutes />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;

