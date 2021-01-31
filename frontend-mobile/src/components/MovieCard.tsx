import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { movieCardCss } from '../styles';
import { truncate } from '../utils/helpers';
import { Movie } from '../utils/types';

type Props = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}

const MovieCard = ({ id, title, subTitle, year, imgUrl }: Props) => {

    const navigation = useNavigation();

    return (
        <View style={movieCardCss.container}>
            <View>
                <Image
                    style={movieCardCss.filmImage}
                    source={{ uri: imgUrl }}
                />
            </View>
            <View style={movieCardCss.infosArea}>
                <Text style={movieCardCss.titleText}>{truncate(title, 32)}</Text>
                <Text style={movieCardCss.yearText}>{year}</Text>
                <Text style={movieCardCss.subTitleText}>{truncate(subTitle, 36)}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MovieDetails', {movieId: id})}
                    activeOpacity={0.6}
                    style={movieCardCss.btnDetailsContainer}
                >
                    <Text style={movieCardCss.btnDetailsText}>VER DETALHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default React.memo(MovieCard);