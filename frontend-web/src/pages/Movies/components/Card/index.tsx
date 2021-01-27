import { truncate } from 'core/utils/helpers';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MovieCard = () => {

    return (
        <Link to="/movies/3" className="card-base card-container">
            <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7Hyl3IiKsaskhBnbkBU9jpAj57F.jpg" alt="HP" className="movie-card-image" />
            <div className="movie-info">
                <h5 className="movie-title">
                    {truncate('Harry Potter e a Pedra Filosofal uuyguguyguygggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', 45)}
                </h5>
                <h6 className="movie-year">2001</h6>
                <h6 className="movie-subtitle">
                    {truncate('Harry Potter e a Pedra Filosofal uuyguguyguygggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', 65)}
                </h6>
            </div>
        </Link>
    );
};

export default MovieCard;