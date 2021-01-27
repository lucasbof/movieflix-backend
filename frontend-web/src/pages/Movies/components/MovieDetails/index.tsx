//import { Movie } from 'core/types/Movie';
import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();


    return (
        <div>
            <h1>{movieId}</h1>
        </div>
    );
};

export default MovieDetails;