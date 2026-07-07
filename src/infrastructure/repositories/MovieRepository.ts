import { MovieLists } from "@/src/api/api.themoviedb.org/MovieLists";
import { ErrorHandler } from "../handlers/ErrorHandler";
import { ResponseHandler } from "../handlers/ResponseHandler";
import { MoviePresentation } from "../interfaces/MoviePresentation.interface";
import { AppAsyncResponse } from "../interfaces/Response.interface";
import { MovieMapper } from "../mappers/MovieMapper";


export class MovieRepository {

    private readonly oMovieLists = new MovieLists();

    public readonly getNowPlayingMovies = async (): AppAsyncResponse<MoviePresentation[]> => {
        try {
            const moviesResponse = await this.oMovieLists.getNowPlaying();
            const movies = moviesResponse.results.map( MovieMapper.getMovieFromModel );
            return ResponseHandler.getResponse(movies);
        } catch (error: unknown) {
            return ErrorHandler.getError(error);
        }
    }

}