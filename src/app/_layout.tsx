import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="Start/Start" options={{ title: 'Inicio' }}/>
    </Stack>
  );
}
