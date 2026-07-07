import { MovieRepository } from "@/src/infrastructure/repositories/MovieRepository";
import { Pressable, Text, View } from "react-native";

const movieRepository = new MovieRepository();

const Index = () => {

    const handleTest = () => {
        movieRepository.getNowPlayingMovies().then(response => {
            if(response.ok){
                const data = response.data;
                console.log({ data });
            } else {
                const error = response.data;
                console.log({error});
            }
        });
    }


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
            <Pressable
                style={ ({ pressed }) => {
                    return {
                        backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingVertical: 10,
                        width: 200,
                        borderRadius: 7,
                        opacity: pressed ? 0.6 : 1
                    }
                }}
                onPress={handleTest}
            >
                <Text
                    style={{ color: 'white' }}
                >
                    Testing
                </Text>
            </Pressable>
        </View>
    </>;
}

export default Index;