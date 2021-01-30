import React from 'react';
import { View, Text, Image } from 'react-native';
import star from '../assets/images/star.png';
import { Review } from '../utils/types';

type Props = {
    reviews: Review[];
}

const ReviewsListCard = ({ reviews }: Props) => {
    return (
        <View>
            <View>
                <Text>Avaliações</Text>
            </View>
                {
                    reviews.map(review => (
                        <View key={review.id}>
                            <View>
                                <Image source={star} />
                                <Text>{review.user.name}</Text>
                            </View>
                            <View>
                                <Text>{review.text}</Text>
                            </View>
                        </View>
                    ))
                }
        </View>
    );
};

export default ReviewsListCard;