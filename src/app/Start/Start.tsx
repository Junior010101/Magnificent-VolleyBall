import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Icone } from '@/assets/svgs/icons';

export default function App() {
  const buttonYPosition = useRef(new Animated.Value(-600)).current;
  const IconPosition = useRef(new Animated.ValueXY({x: -200, y: -1000})).current;

  useEffect(() => {
    Animated.spring(buttonYPosition, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
    Animated.spring(IconPosition, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient className='flex-1 items-center'
    colors={['#FDC701', '#FF6200', '#FF6200']}
    >
      <Header/>
      <Animated.View className='z-[1] mt-auto -mb-10'
      style={[
        {transform: [
          {translateX: IconPosition.x },
          {translateY: IconPosition.y}
        ]},
      ]}
      >
        <Icone/>
      </Animated.View>
      <Animated.View className="z-0 bg-azul-200 w-full h-72 rounded-s-3xl justify-center items-center"
        style={[
          {
            transform: [{ translateY: buttonYPosition }],
          },
        ]}
      >
        <Button nome="Entrar" route="../Home/Score"/>
      </Animated.View>
    </LinearGradient>
  );
}
