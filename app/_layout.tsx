import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const RootLayout = () => {
    return <>
        <QueryClientProvider
            client={ queryClient }
        >
            <StatusBar style='auto' />
            <SafeAreaView
                className='flex-1'
            >
                <Slot />
            </SafeAreaView>
        </QueryClientProvider>
    </>;
}

export default RootLayout;