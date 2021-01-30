import React from 'react';
import { View, Text, Image } from 'react-native';
import { Movie } from '../utils/types';

type Props = {
    movie?: Movie;
}

const BasicInfoCard = ({ movie }: Props) => {
    return (
        <View>
            <View>
                <Text>{movie?.title}</Text>
            </View>
            <View>
                <Image source={{uri: movie?.imgUrl}} />
            </View>
            <View>
                <Text>{movie?.year}</Text>
                <Text>{movie?.subTitle}</Text>
            </View>
            <View>
                <Text>{movie?.synopsis}</Text>
            </View>
        </View>
    );
};

export default BasicInfoCard;