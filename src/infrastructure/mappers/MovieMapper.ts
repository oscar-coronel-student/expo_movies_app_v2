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
            poster: model.poster_path,
            backdrop: model.backdrop_path
        };
    }

}