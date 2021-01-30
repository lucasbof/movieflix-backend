import React from 'react';
import { Text, View } from 'react-native';
import { commonCss } from '../styles';
import { Movie } from '../utils/types';

type Props = {
    route: {
        params: {
            movieId: number;
        }
    }
}

const MovieDetails = ({ route }: Props) => {
    const { movieId } = route.params;

    return (
        <View style={commonCss.container}>
            <Text>Movie Details id {movieId}</Text>
        </View>
    );
}
export default MovieDetails;