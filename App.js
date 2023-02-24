import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const displayText = useState(false);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
