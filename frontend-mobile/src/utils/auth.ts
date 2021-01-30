import jwtDecode from 'jwt-decode';
import asyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponse } from './types';

export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';
export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = async (loginResponse: LoginResponse) => {
    await asyncStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = async () => {
    const sessionData = await asyncStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = async () => {
    const sessionData = await getSessionData();
    
    try {
        const tokenDecoded = jwtDecode(sessionData.access_token);
        return tokenDecoded as AccessToken;  
    }
    catch(error) {
        return {} as AccessToken;
    }  
}

export const isTokenValid = async () => {
    const { exp } = await getAccessTokenDecoded();
    const isTokenValid = Date.now() <= exp * 1000;
    return isTokenValid;
}

export const isAuthenticated = async () => {
    const sessionData = await getSessionData();
    return !!sessionData.access_token && isTokenValid();
}

export const isAllowedByRole = async (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0) {
        return true;
    }
    const { authorities } = await getAccessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}

export const logout = async () => {
    await asyncStorage.removeItem('authData');
}