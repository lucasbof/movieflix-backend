import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { rightHeaderCss } from '../styles';
import { isAuthenticated, logout } from '../utils/auth';

const RightHeader = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const getAuthStatus = async () => {
        let value = await isAuthenticated();
        setAuthenticated(value);
    }

    const handleLogout = async () => {
        if(authenticated) {
            setAuthenticated(false);
            logout();
        }
    }

    useEffect(() => {
        getAuthStatus();
    }, []);

    return (
        <View style={rightHeaderCss.container}>
            {
                authenticated &&
                (
                    <TouchableOpacity
                        onPress={handleLogout} 
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