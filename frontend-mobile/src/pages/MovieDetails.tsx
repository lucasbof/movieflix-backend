import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, ScrollView } from 'react-native';
import { BasicInfoCard, ReviewInputCard, ReviewsListCard } from '../components';
import { commonCss } from '../styles';
import { isAllowedByRole } from '../utils/auth';
import { toastError, toastSuccess } from '../utils/customToast';
import { makePrivateRequest } from '../utils/requests';
import { Movie } from '../utils/types';

type Props = {
    route: {
        params: {
            movieId: number;
        }
    }
}

type FormState = {
    text: string;
}


const MovieDetails = ({ route }: Props) => {
    const { movieId } = route.params;
    const [movie, setMovie] = useState<Movie>();
    const [reviewsListReload, setReviewsListReload] = useState(0);
    const [isMovieDetailsLoading, setIsMovieDetailsLoading] = useState(false);
    const [isReviewSubmitLoading, setIsReviewSubmitLoading] = useState(false);
    const [isAllowedToReview, setIsAllowedToReview] = useState(false);

    const getMovie = async () => {
        try {
            setIsMovieDetailsLoading(true);
            const res = await makePrivateRequest({ url: `/movies/${movieId}` });
            setMovie(res.data);
            const isAllowed = await isAllowedByRole(['ROLE_MEMBER']);
            setIsAllowedToReview(isAllowed);

        }
        catch (error) {
            toastError('Erro ao buscar os detalhes do produto');
        }
        finally {
            setIsMovieDetailsLoading(false);
        }
    }

    const onReviewInputSubmit = async (dataForm: FormState) => {
        try {
            setIsReviewSubmitLoading(true);
            if (dataForm.text.trim().length === 0) {
                toastError('A avaliação não pode ser vazia ou só espaços');
                return;
            }
            const data = { ...dataForm, movieId: movie?.id };
            const res = await makePrivateRequest({ url: '/reviews', method: 'POST', data });
            toastSuccess('Avaliação salva com sucesso!');
            setReviewsListReload(reviewsListReload + 1);
        }
        catch (error) {
            toastError('Erro ao salvar a avaliação!');
        }
        finally {
            setIsReviewSubmitLoading(false);
        }
    }

    useEffect(() => {
        getMovie();
    }, [movieId, reviewsListReload]);

    return (

        <View style={commonCss.container}>
            <ScrollView>
                {
                    isMovieDetailsLoading ?
                        (<ActivityIndicator color="gray" size="large" />)
                        :
                        (<BasicInfoCard movie={movie} />)
                }

                {isAllowedToReview &&
                    (
                        isMovieDetailsLoading ?
                            (
                                <ActivityIndicator color="gray" size="large" />
                            )
                            :
                            (<ReviewInputCard onSubmit={onReviewInputSubmit} isReviewLoading={isReviewSubmitLoading} />)
                    )}
                {
                    movie?.reviews && movie.reviews.length > 0 &&
                    (
                        isMovieDetailsLoading ?
                            (
                                <ActivityIndicator color="gray" size="large" />
                            )
                            :
                            (<ReviewsListCard reviews={movie?.reviews ?? []} />)
                    )
                }
            </ScrollView>
        </View>
    );
}
export default MovieDetails;