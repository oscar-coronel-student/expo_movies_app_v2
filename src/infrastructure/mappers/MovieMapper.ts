import { Movie } from "@/src/domain/models/Movie";
import { MoviePresentation } from "../interfaces/Movie.interface";


export class MovieMapper {

    static readonly getMovieFromModel = (model: Movie): MoviePresentation => {

        return {
            id: model.id,
            title: model.title,
            original_title: model.original_title,
            overview: model.overview,
            video: model.video,
            vote_count: model.vote_count,
            vote_average: model.vote_average
        };
    }

}