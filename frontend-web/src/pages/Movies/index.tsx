import React from 'react';
import MovieCard from './components/Card';
import './styles.scss';

const Movies = () => {
    return (
        <div className="movies-container">
            <div className="genre-search-container">
                <div>Genre area</div>
            </div>

            <div className="cards-area">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default Movies;