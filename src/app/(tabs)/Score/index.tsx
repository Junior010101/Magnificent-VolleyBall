import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

export default function Score() {
  const { team1, team2, winScore } = useLocalSearchParams();
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    if(score1 == Number(winScore)) {
      Alert.alert("Fim de jogo", "🥇Time 1 ganhou!", [
        {
          text: 'OK',
          onPress: () => router.replace('../Home/Score'),
        }
      ]);
    }
    if (score2 == Number(winScore)) {
      Alert.alert("Fim de jogo", "🥇Time 2 ganhou!", [
        {
          text: 'OK',
          onPress: () => router.replace('../Home/Score'),
        }
      ]);
    }
  }, [score1, score2]);

  return (
    <>
    <Button
    title='Voltar'
    onPress={() => router.push({ pathname: '../Home/Score'})}
    />
    <View style={styles.container}>
      <Text style={styles.title}>Pontuação</Text>
      <View style={styles.teamNames}>
        <Text style={styles.teamName}>{team1}</Text>
        <Text style={styles.teamName}>{team2}</Text>
      </View>
      <View style={styles.scores}>
        <Text style={styles.score}>{score1}</Text>
        <Text style={styles.score}>{score2}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => setScore1(score1 + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setScore1(score1 > 0? score1 - 1 : score1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <View className="w-[1px] h-full border border-white"></View>
        <TouchableOpacity style={styles.button} onPress={() => setScore2(score2 + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setScore2(score2 > 0? score2 - 1 : score2)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
      </View>
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
  teamNames: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  teamName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#ccc',
    padding: 30,
    borderRadius: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#0074D9',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
