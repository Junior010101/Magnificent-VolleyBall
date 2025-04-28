import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Icone } from '@/assets/svgs/icons';

export default function App() {
  // Criando uma referência para a animação de posição
  const buttonYPosition = useRef(new Animated.Value(-600)).current;
  const IconPosition = useRef(new Animated.ValueXY({x: -200, y: -1000})).current;

  useEffect(() => {
    // Animação de entrada, fazendo o botão surgir de baixo para cima
    Animated.spring(buttonYPosition, {
      toValue: 0, // A posição final é 0 (fixa no lugar)
      friction: 5, // Define a "rigidez" da animação
      useNativeDriver: true, // Usar a aceleração de hardware
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
      <Animated.View className='absolute mt-safe-offset-60 z-[1]'
      style={[
        {transform: [
          {translateX: IconPosition.x },
          {translateY: IconPosition.y}
        ]},
      ]}
      >
        <Icone/>
      </Animated.View>
      <Animated.View className="mt-auto z-0 bg-azul-200 w-full h-72 rounded-s-3xl justify-center items-center"
        style={[
          {
            transform: [{ translateY: buttonYPosition }], // Aplica a animação na posição Y
          },
        ]}
      >
        <Button nome="Entrar" route="../Home/Score"/>
      </Animated.View>
    </LinearGradient>
  );
}
