// @ts-ignore
// import $api from "../http/index.ts";
import API_URL from '../http/index.ts';
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axios.post(API_URL + 'api/auth/login', {username: username, password: password, fingerprint: '1'}, {headers:{ 'Content-Type': 'multipart/form-data'}})
        // $api.post<AuthResponse>("", {username: username, password: password}, {headers:{ 'Content-Type': 'text/plain'}}

    }


    static async logout(): Promise<void> {
        return axios.post('/logout')

    }

    
}
