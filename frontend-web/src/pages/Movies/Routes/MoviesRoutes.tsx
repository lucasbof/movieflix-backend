import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from '../';
import MovieDetails from '../components/MovieDetails';

const MoviesRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/movies" exact>
                    <Movies />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
            </Switch>
        </div>
    );
}

export default MoviesRoutes;