import Pagination from 'core/components/Pagination';
import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MovieCard from './components/Card';
import GenreSelect from './components/GenreSelect';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import './styles.scss';

const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genreId, setGenreId] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12,
            genreId
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .catch(() => toast.error('Erro ao buscar a lista de filmes'))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage, genreId]);

    return (
        <div className="movies-container">
            <GenreSelect setGenreId={setGenreId} setActivePage={setActivePage}/>

            <div className="cards-area">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>
            {moviesResponse &&
                <Pagination
                    totalPages={moviesResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            }
        </div>
    )
}

export default Movies;