import React from 'react';
import { View, Text, Image } from 'react-native';
import { Movie } from '../utils/types';
import { basicInfoCardCss } from '../styles';

type Props = {
    movie?: Movie;
}

const BasicInfoCard = ({ movie }: Props) => {
    return (
        <View style={basicInfoCardCss.container}>
            <View style={basicInfoCardCss.titleContainer}>
                <Text style={basicInfoCardCss.titleText}>{movie?.title}</Text>
            </View>
            <View style={basicInfoCardCss.imageContainer}>
                <Image style={{width: 374, height: 228}} source={{uri: movie?.imgUrl}} />
            </View>
            <View style={basicInfoCardCss.contentContainer}>
                <View>
                    <Text style={basicInfoCardCss.yearText}>{movie?.year}</Text>
                    <Text style={basicInfoCardCss.subTitleText}>{movie?.subTitle}</Text>
                </View>
                <View style={basicInfoCardCss.synopsisContainer}>
                    <View>
                        <Text style={basicInfoCardCss.synopsisTitleText}>Sinopse</Text>
                    </View>
                    <View style={basicInfoCardCss.synopsisBodyContainer}>
                        <Text style={basicInfoCardCss.synopsisBodyText}>{movie?.synopsis}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BasicInfoCard;