import { AxiosPromise } from 'axios';
import axios from '../../services/axios';

export const apiAuth = new (class Api {
    login(
        email: string, 
        password: string
    ): AxiosPromise {
        return axios({
            url: '/auth/login',
            method: 'post',
            data: {
                email: email,
                password: password
            }
        })
    };
    registration(
        email: string, 
        password: string, 
        name: string
    ): AxiosPromise {
        return axios({
            url: '/auth/register',
            method: 'post',
            data: {
                email: email,
                password: password,
                name: name
            }
        })
    };
    logout(): AxiosPromise {
        return axios({
            url: '/auth/logout',
            method: 'post',
        })
    }
})