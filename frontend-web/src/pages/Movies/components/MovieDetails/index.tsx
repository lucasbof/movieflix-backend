import { Movie } from 'core/types/Movie';
import { isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BasicInfoCard from './components/BasicInfoCard';
import ReviewInputCard from './components/ReviewInputCard';
import ReviewsListCard from './components/ReviewsListCard';
import BasicInfoLoader from './Loaders/BasicInfoLoader';
import ReviewInputLoader from './Loaders/ReviewInputLoader';
import ReviewsListLoader from './Loaders/ReviewsListLoader';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

type FormState = {
    text: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [reviewsListReload, setReviewsListReload] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .catch(() => toast.error('Erro ao buscar os detalhes do produto'))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId, reviewsListReload]);

    const onReviewInputSubmit = (dataForm: FormState) => {
        const data = { ...dataForm, movieId: movie?.id };
        makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data
        })
            .then(() => {
                toast.info('Avaliação salva com sucesso!');
                setReviewsListReload(reviewsListReload + 1);
            })
            .catch(() => {
                toast.error('Erro ao salvar a avaliação!');
            });
    }


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
                        (
                        <div className="mt-2">
                            <ReviewInputLoader />
                        </div>
                        )
                        :
                        (<ReviewInputCard onSubmit={onReviewInputSubmit} />)
                )}
            {
                movie?.reviews && movie.reviews.length > 0 &&
                (
                    isLoading ?
                        (
                        <div className="mt-2">
                            <ReviewsListLoader />
                        </div>
                        )
                        :
                        (<ReviewsListCard reviews={movie?.reviews ?? []} />)
                )
            }

        </div>
    );
};

export default MovieDetails;