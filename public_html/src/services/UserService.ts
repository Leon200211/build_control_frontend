// @ts-ignore
import $api from "../http/index.ts";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
// @ts-ignore
import {IUser} from "../models/IUser.ts";

export default class UserService{
    static fetchUsers (): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}
