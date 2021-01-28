//import { Movie } from 'core/types/Movie';
import { Movie } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BasicInfoCard from './components/BasicInfoCard';
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
        <div className="product-details-container">
            <div className="basic-info-container">
                {
                    isLoading ?
                        (<BasicInfoLoader />)
                        :
                        (<BasicInfoCard movie={movie} />)
                }

            </div>


        </div>
    );
};

export default MovieDetails;