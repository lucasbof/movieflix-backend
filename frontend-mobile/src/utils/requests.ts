import axios, { Method } from 'axios';
import { CLIENT_ID, CLIENT_SECRET, getSessionData, logout } from './auth';
import qs from 'qs';
import { LoginData } from './types';
import { Base64 } from 'js-base64';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
};

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://192.168.15.8:8080';

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
};

export const makePrivateRequest = async ({ method = 'GET', url, data, params}: RequestParams) => {
    const token = await getSessionData();
    const headers = {
        'Authorization': `Bearer ${token.access_token}`
    }

    return makeRequest({ method, url, data, params, headers });
}

export const makeLoginRequest = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const headers = {
        Authorization: `Basic ${Base64.encode(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    const payload = qs.stringify({...loginData, grant_type: 'password' });

    return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}