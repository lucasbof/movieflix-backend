import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { buttonIconCss } from '../styles';
import arrow from '../assets/images/arrow.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
    label: string;
    routeToGo: string;
}

const ButtonIcon = ({ label, routeToGo }: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeToGo)}
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