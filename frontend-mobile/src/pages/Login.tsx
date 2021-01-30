import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ButtonIcon } from '../components';
import { commonCss, loginCss } from '../styles';
import openedEye from '../assets/images/eyes-opened.png';
import closedEye from '../assets/images/eyes-closed.png';
import { LoginData } from '../utils/types';
import { toastError } from '../utils/customToast';
import { makeLoginRequest } from '../utils/requests';
import { saveSessionData } from '../utils/auth';
import { validateEmail } from '../utils/helpers';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState<LoginData>({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            if (userInfo.username.trim().length === 0 || userInfo.password.trim().length === 0) {
                toastError('Login/Senha não podem ser vazios ou só espaços');
            }
            else if (!validateEmail(userInfo.username)) {
                toastError('Email inválido!');
            }
            else {
                setIsLoading(true);
                const res = await makeLoginRequest(userInfo);
                await saveSessionData(res.data);
                navigation.reset({routes: [{name: 'Movies'}], index: 0});
            }
        }
        catch (error) {
            toastError('Usuário/senha inválidos');
            setIsLoading(false);
        }
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
                        style={[loginCss.inputStyle, { paddingRight: 48 }]}
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
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginCss.btnContainer}>
                {
                    isLoading ? 
                    (<ActivityIndicator color="#000" size="large" />)
                    :
                    (<ButtonIcon label="fazer login" onPress={handleLogin} />)
                }
            </View>
        </View>
    );
}
export default Login;