import { LinearGradient } from "expo-linear-gradient";
import { Header } from "@/components/header";
import { Image, ScrollView, Text, View } from "react-native";

export default function Sobre() {
    return(
        <LinearGradient className='flex-1 items-center'
        colors={['#355FC3', '#35AEC3', '#35AEC3']}
        >
            <Header logo={true} sobre={true}/>
            <ScrollView className="w-full flex-1">
                <View className="items-center mt-5 z-[1]">
                    <Image className="w-28 mt-1 z-0 absolute h-28 rounded-full" source={require('../../../assets/images/icon.png')} />
                    <View className="w-28 z-0 h-28 border-laranja border-2 rounded-full"></View>
                </View>
                <LinearGradient className="self-center text-center z-0 pt-12 pb-12 -mt-12 w-11/12" colors={['#FDC701', '#977701']}>
                    <View className="mt-1 w-11/12">
                        <Text className="mt-1 ml-14">Na Magnificent VolleyBall, acreditamos que o futuro do vôlei começa com organização.
                        Criamos uma solução simples, moderna e eficiente para agendar treinos e manter tudo sob controle — sem bagunça,
                        sem complicação. Nosso sistema foi pensado para atletas, técnicos e equipes que valorizam o tempo e querem focar
                        no que realmente importa: evoluir no jogo. Este projeto nasceu em um ambiente acadêmico, mas carrega a visão de
                        quem enxerga a tecnologia como aliada no esporte. Mesmo sendo uma iniciativa facultativa, desenvolvemos cada parte
                        com cuidado e foco na inovação, buscando sempre melhorar a experiência dos usuários. Com a Magnificent VolleyBall,
                        o treino começa antes da quadra.</Text>
                    </View>
                </LinearGradient>
                <View className="bg-orange-300  self-center items-center pt-12 pb-12 w-11/12">
                    <Image className="w-96 h-96 mb-10 z-0 rounded-lg" source={require('../../../assets/images/nois.png')} />
                </View>
                <LinearGradient className="self-center text-center z-0 pt-10 pb-12 -mt-12 w-11/12" colors={['#FDC701', '#977701']}>
                    <View className="mt-1 w-11/12">
                        <Text className=" ml-14 mb-2">Com a mesma paixão que sentimos pelo vôlei, decidimos nos unir para criar algo que
                        pudesse conectar mais pessoas ao esporte que tanto amamos. Além de compartilhar os momentos em quadra, decidimos
                        transformar nossa paixão em algo maior. Foi com esse objetivo que elaboramos este aplicativo, para proporcionar a
                        todos a oportunidade de se conectar, jogar e aprender mais sobre o vôlei. Esperamos que você se inspire e compartilhe
                        essa energia conosco. Juntos, podemos fazer do vôlei muito mais do que um esporte, mas uma verdadeira comunidade!</Text>
                        <Text className="mt-2 ml-14 border-t-2 text-branco">Escrito com ❤ por junior010101.</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
        </LinearGradient>
    );
}
