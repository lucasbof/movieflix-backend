import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { rightHeaderCss } from '../styles';

const RightHeader = () => {
    const navegation = useNavigation();
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <View style={rightHeaderCss.container}>
            {
                authenticated &&
                (
                    <TouchableOpacity 
                        style={rightHeaderCss.buttonContainer}
                        activeOpacity={0.6}
                    >
                        <Text style={rightHeaderCss.titleText}>SAIR</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}
export default RightHeader;