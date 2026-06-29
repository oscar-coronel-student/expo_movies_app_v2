import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


export class Api {

    protected oAxios!: AxiosInstance;
    private config: AxiosRequestConfig;

    constructor(){
        this.config = {
            baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
            responseType: 'json',
            params: {
                language: 'es-EC',
                page: 1
            },
            headers: {
                Authorization: `Bearer ${ process.env.EXPO_PUBLIC_MOVIE_DB_ACCESS_TOKEN }`,
                'cache-control': 'no-cache'
            }
        }

        this.__reload();
    }

    private __reload(){
        this.oAxios = axios.create( this.config );
        this.oAxios.interceptors.request.use( ( config ) => {
            return {
                ...config
            };
        });
        this.oAxios.interceptors.response.use( ( response ) => {
            return {
                ...response
            };
        })
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

        this.__reload();
        return this;
    }


}