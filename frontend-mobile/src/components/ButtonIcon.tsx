import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { buttonIconCss } from '../styles';
import arrow from '../assets/images/arrow.png';


type Props = {
    label: string;
    onPress: Function;
}

const ButtonIcon = ({ label, onPress }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={buttonIconCss.container}
            activeOpacity={0.8}
        >
            <View style={buttonIconCss.primaryContainer}>
                <Text style={buttonIconCss.primaryText}>
                    {label}
                </Text>
            </View>
            <View style={buttonIconCss.arrowContainer}>
                <Image source={arrow} />
            </View>
        </TouchableOpacity>
    );
}
export default ButtonIcon;