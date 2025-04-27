import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient className="flex-1 justify-center items-center" 
    colors={['#FDC701', '#FF6200', '#FF6200']}
    >
      <Text>Edit app/Start to edit this screen.</Text>
    </LinearGradient>
  );
}
