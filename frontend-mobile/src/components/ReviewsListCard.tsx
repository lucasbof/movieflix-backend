import React from 'react';
import { View, Text, Image } from 'react-native';
import star from '../assets/images/star.png';
import { Review } from '../utils/types';
import { reviewsListCardCss } from '../styles';

type Props = {
    reviews: Review[];
}

const ReviewsListCard = ({ reviews }: Props) => {
    return (
        <View style={reviewsListCardCss.container}>
            <View>
                <Text style={reviewsListCardCss.titleText}>Avaliações</Text>
            </View>
                {
                    reviews.map(review => (
                        <View key={review.id} style={reviewsListCardCss.reviewContainer}>
                            <View style={reviewsListCardCss.authorContainer}>
                                <Image source={star} />
                                <Text style={reviewsListCardCss.authorText}>{review.user.name}</Text>
                            </View>
                            <View style={reviewsListCardCss.reviewContentContainer}>
                                <Text style={reviewsListCardCss.reviewContentText}>{review.text}</Text>
                            </View>
                        </View>
                    ))
                }
        </View>
    );
};

export default ReviewsListCard;