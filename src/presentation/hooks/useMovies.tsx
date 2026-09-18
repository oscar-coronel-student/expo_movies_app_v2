import { MovieRepository } from "@/src/infrastructure/repositories/MovieRepository";
import { useQuery } from "@tanstack/react-query";


const movieRepository = new MovieRepository();

export const useMovies = () => {

    const { data, isPending, isFetching, isLoading, isRefetching, refetch, isStale } = useQuery({
        queryKey: [''],
        queryFn: movieRepository.getNowPlayingMovies,
        staleTime: 1000 * 60 * 60 * 24,
        enabled: true
    });

    return {

    }
}
