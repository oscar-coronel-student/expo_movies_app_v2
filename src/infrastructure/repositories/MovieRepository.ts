import { MovieLists } from "@/src/api/api.themoviedb.org/MovieLists";
import { MoviePresentation } from "../interfaces/Movie.interface";
import { MovieMapper } from "../mappers/MovieMapper";



export class MovieRepository {

    private readonly oMovieLists = new MovieLists();

    public readonly getNowPlayingMovies = async (): Promise<MoviePresentation[]> => {
        const moviesResponse = await this.oMovieLists.getNowPlaying();
        const movies = moviesResponse.results.map( MovieMapper.getMovieFromModel );
        return movies;
    }

}