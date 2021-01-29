import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { ButtonIcon } from '../components';
import { commonCss, loginCss } from '../styles';
import openedEye from '../assets/images/eyes-opened.png';
import closedEye from '../assets/images/eyes-closed.png';
import { UserInfo } from '../utils/types';

const Login = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState<UserInfo>({ username: '', password: '' });

    const handleLogin = () => {
        console.warn('fazendo requisição..', userInfo);
    }

    return (
        <View style={commonCss.container}>
            <View style={loginCss.titleContainer}>
                <Text style={loginCss.titleText}>LOGIN</Text>
            </View>
            <View style={loginCss.inputsContainer}>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={loginCss.inputStyle}
                    value={userInfo.username}
                    onChangeText={
                        e => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }
                    }
                />
                <View style={loginCss.passwordContainer}>
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        style={[loginCss.inputStyle, {paddingRight: 48}]}
                        value={userInfo.password}
                        onChangeText={
                            e => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                        secureTextEntry={hidePassword}
                    />
                    <TouchableOpacity
                        onPress={() => setHidePassword(!hidePassword)}
                        style={loginCss.toggle}
                    >
                        <Image
                            source={hidePassword ? closedEye : openedEye}
                            style={{height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginCss.btnContainer}>
                <ButtonIcon label="fazer login" onPress={handleLogin} />
            </View>
        </View>
    );
}
export default Login;