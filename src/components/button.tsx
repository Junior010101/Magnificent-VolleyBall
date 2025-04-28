import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export const Button = (props: any) => {
    const IrParaTela = () => {
        router.replace(props.route);
    }
    return(
        <>
        <TouchableOpacity 
            onPress={IrParaTela} 
            className="border-2 w-60 h-16 border-white rounded-3xl items-center justify-center"
            >
            <Text className="text-white text-2xl">{props.nome}</Text>
        </TouchableOpacity>
        </>
    );
}
