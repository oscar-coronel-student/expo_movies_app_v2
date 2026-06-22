import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    // head
}

axios.create

export class Api {

    protected config: AxiosRequestConfig = {
        baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
        responseType: 'json',
        params: {
            language: '',
            page: 1
        },
    }

    protected setConfig(newConfig: AxiosRequestConfig, type: 'replace'|'new' = 'new') {
        if( type === 'new' )
            this.config = newConfig;
        else {
            this.config = {
                ...this.config,
                ...newConfig
            };
        }
        return this;
    }

}