import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
    return <>
        <StatusBar style='auto' />
        <SafeAreaView
            className='flex-1'
            
        >
            <Slot />
        </SafeAreaView>
    </>;
}

export default RootLayout;