//import { Movie } from 'core/types/Movie';
import { Movie } from 'core/types/Movie';
import { isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BasicInfoCard from './components/BasicInfoCard';
import ReviewInputCard from './components/ReviewInputCard';
import BasicInfoLoader from './Loaders/BasicInfoLoader';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);


    return (
        <div className="movie-details-container">
            <div className="basic-info-container">
                {
                    isLoading ?
                        (<BasicInfoLoader />)
                        :
                        (<BasicInfoCard movie={movie} />)
                }

            </div>
            {isAllowedByRole(['ROLE_MEMBER']) && 
            (
                isLoading ?
                        (<BasicInfoLoader />)
                        :
                        (<ReviewInputCard movieId={movie?.id ?? 0} />)
            )}


        </div>
    );
};

export default MovieDetails;