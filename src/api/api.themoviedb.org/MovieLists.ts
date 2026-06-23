
import { Api } from "@/src/config/Api";
import { Movie } from "@/src/domain/models/Movie";
import { MovieResponse } from "@/src/domain/models/MovieResponse";
import { AxiosResponse } from "axios";


type AxiosMovieResponse = AxiosResponse<MovieResponse<Movie>>;

export class MovieLists extends Api {

    private readonly nowPlayingEndpoint: string = '/now_playing';

    public getNowPlaying = async (): Promise<MovieResponse<Movie>> => {
        const response = await this.oAxios.get<any, AxiosMovieResponse>( this.nowPlayingEndpoint );
        const data = response.data;
        return data;
    }
    
}