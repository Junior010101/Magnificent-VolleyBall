import { router, Stack } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashAnimation() {
    const animacao = useRef<LottieView>(null);

    useEffect(() => {
        setTimeout(() => {
            router.replace('/Start/Start');
        }, 5000);
    }, []);

    return(
        <LinearGradient
            className='flex-1 justify-center items-center'
            colors={['#FDC701', '#FF6200', '#FF6200']}
            >
            <Stack.Screen options={{ headerShown: false }}/>
            <LottieView
            ref={animacao}
            autoPlay
            loop={true}
            style={{
                width: '55%',
                height: '55%',
            }}

            //find lottie files
            source={require('../assets/lottie/Ball_Icon.json')}
            />
        </LinearGradient>
    );
}
