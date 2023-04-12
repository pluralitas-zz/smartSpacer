import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function createNewUser() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  

  const createNewUser = () => {
    console.log(`Added ${Username} (${Password}) to list of users.`);
    setUsername('');
    setPassword('');
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New User!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={Username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={createNewUser}
      >
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
