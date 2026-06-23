import { MovieRepository } from "@/src/infrastructure/repositories/MovieRepository";
import { useEffect } from "react";
import { Text, View } from "react-native";

const movieRepository = new MovieRepository();

const Index = () => {

    useEffect(() => {
        movieRepository.getNowPlayingMovies();
    }, []);


    return <>
        <View className="flex-1">
            <Text className="font-bold text-3xl">
                Hola Mundo 2
            </Text>
            <Text>
                { process.env.EXPO_PUBLIC_MOVIE_DB_URL }
            </Text>
            <Text>
                { process.env.EXPO_PUBLIC_MOVIE_DB_KEY }
            </Text>
        </View>
    </>;
}

export default Index;