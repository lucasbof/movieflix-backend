import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './components/Card';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import './styles.scss';

const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

    return (
        <div className="movies-container">
            <div className="genre-search-container">
                <div>Genre area</div>
            </div>

            <div className="cards-area">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default Movies;