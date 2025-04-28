import { Stack } from "expo-router";
import '../styles/globals.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Start/Start" options={{ title: 'Inicio' }}/>
    </Stack>
  );
}
