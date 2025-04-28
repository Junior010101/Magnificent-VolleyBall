import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Home() {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const router = useRouter();

  return (
    <>
    <Button
    title='Voltar'
    onPress={() => router.push({ pathname: '../Start/Start'})}
    />
    <View style={styles.container}>

      <Text style={styles.title}>Digite o nome dos times</Text>
      <TextInput
        placeholder="Time 1"
        value={team1}
        onChangeText={setTeam1}
        style={styles.input}
      />
      <TextInput
        placeholder="Time 2"
        value={team2}
        onChangeText={setTeam2}
        style={styles.input}
      />
      <Button
        title="Começar"
        onPress={() => router.push({ pathname: '../(tabs)/Score', params: { team1, team2 } })}
        disabled={!team1 || !team2}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});
