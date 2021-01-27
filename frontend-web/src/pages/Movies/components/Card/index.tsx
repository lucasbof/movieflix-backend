import { Movie } from 'core/types/Movie';
import { truncate } from 'core/utils/helpers';
import React from 'react';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

    return (
        <div className="card-base card-container">
            <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
            <div className="movie-info">
                <h5 className="movie-title">
                    {truncate(movie.title, 50)}
                </h5>
                <h6 className="movie-year">{movie.year}</h6>
                <h6 className="movie-subtitle">
                    {truncate(movie.subTitle, 65)}
                </h6>
            </div>
        </div>
    );
};

export default MovieCard;