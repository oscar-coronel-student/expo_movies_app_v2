import { Movie } from "@/src/domain/models/Movie";
import { MoviePresentation } from "../interfaces/MoviePresentation.interface";


export class MovieMapper {

    static readonly getMovieFromModel = (model: Movie): MoviePresentation => {

        return {
            id: model.id,
            title: model.title,
            description: model.overview,
            releaseDate: new Date(model.release_date),
            rating: model.popularity,
            poster: MovieMapper.getUri(model.poster_path),
            backdrop: MovieMapper.getUri(model.backdrop_path)
        };
    }

    static readonly getUri = (endpoint: string): string => {
        return `https://image.tmdb.org/t/p/w500${endpoint}`;
    }

}