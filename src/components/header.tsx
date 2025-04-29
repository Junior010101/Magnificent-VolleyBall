import { View, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { Button } from "./button";

const { width } = Dimensions.get('window');

let value = 0;

export const Header = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [slideAnim] = useState(new Animated.Value(width));
    const [position] = useState(new Animated.Value(0));
    const [position2] = useState(new Animated.Value(0));
    const [rotate] = useState(new Animated.Value(0));
    const [rotate2] = useState(new Animated.Value(0));

    const toggleSidebar = () => {
        Animated.timing(slideAnim, {
            toValue: isOpen ? width : width - width * 0.7,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsOpen(!isOpen);
        Animated.timing(position, {
            toValue: isOpen ? 0 : 10,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(position2, {
            toValue: isOpen ? 0 : -11,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(rotate, {
            toValue: isOpen ? 0 : 13,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(rotate2, {
            toValue: isOpen ? 0 : -13,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
        <BlurView intensity={50} tint="light" className="w-full h-16 justify-start flex flex-row z-[3]">
            <View className="flex-row items-center h-full px-5 self-start">
                <Image style={{opacity: props.logo? value : value + 1}} className="w-12 h-12 rounded-lg" source={require('../assets/images/icon.png')} />
            </View>
            <TouchableOpacity onPress={toggleSidebar} className="bg-trasparent w-10 h-16 justify-self-end justify-center ml-auto mr-6">
                <Animated.View className="items-center h-2 bg-white rounded-xl"
                style={{
                    transform: [
                        { translateY: position },
                        { rotate: rotate.interpolate({ inputRange: [0,100], outputRange: ['0deg','360deg']}) }
                    ]
                }}
                ></Animated.View>     
                <Animated.View className="items-center h-2 justify-center bg-white mt-1 rounded-xl"
                style={{
                    transform: [
                        { rotate: rotate.interpolate({ inputRange: [0,100], outputRange: ['0deg','360deg']}) }
                    ]
                }}
                ></Animated.View>     
                <Animated.View className="items-center h-2 justify-center bg-white mt-1 rounded-xl"
                style={{
                    transform: [
                        { translateY: position2 },
                        { rotate: rotate2.interpolate({ inputRange: [0,100], outputRange: ['0deg','360deg']}) }
                    ]
                }}
                ></Animated.View>     
            </TouchableOpacity>
        </BlurView>
        {/* Sidebar */}
        <Animated.View
            style={{
                transform: [{ translateX: slideAnim }],
                width: width * 0.7,
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2
            }}
        >
            <View className="flex-1 h-screen bg-branco items-center">
                <TouchableOpacity onPress={toggleSidebar} className="self-end mt-20">
                </TouchableOpacity>

                {props.sobre? <Button nome="Voltar" route="../../Start/Start"/> : <Button nome="Sobre Nós" route="../(tabs)/Sobre"/>}
            </View>
        </Animated.View>
        </>
    );
}
