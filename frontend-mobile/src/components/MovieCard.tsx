import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { movieCardCss } from '../styles';
import { truncate } from '../utils/helpers';
import { Movie } from '../utils/types';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

    const navigation = useNavigation();

    return (
        <View style={movieCardCss.container}>
            <View>
                <Image
                    style={movieCardCss.filmImage}
                    source={{ uri: movie.imgUrl }}
                />
            </View>
            <View style={movieCardCss.infosArea}>
                <Text style={movieCardCss.titleText}>{truncate(movie.title, 32)}</Text>
                <Text style={movieCardCss.yearText}>{movie.year}</Text>
                <Text style={movieCardCss.subTitleText}>{truncate(movie.subTitle, 36)}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MovieDetails', {movieId: movie.id})}
                    activeOpacity={0.6}
                    style={movieCardCss.btnDetailsContainer}
                >
                    <Text style={movieCardCss.btnDetailsText}>VER DETALHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default MovieCard;