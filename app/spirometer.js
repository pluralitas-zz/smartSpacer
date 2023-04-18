import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import React from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Spirometer() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Spirometer </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/stepbystepguide')}>
          <FontAwesome5 name="file-alt" size={30} color="#fff" />
          <Text style={styles.buttonText}>Step-by-Step Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tencommonmistakes')}>
          <FontAwesome5 name="exclamation-triangle" size={30} color="#fff" />
          <Text style={styles.buttonText}>Tips & Common Mistakes </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/breathingtechniques')}>
          <MaterialCommunityIcons name="air-filter" size={30} color="#fff" />
          <Text style={styles.buttonText}>Breathing Techniques</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 64,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: '20%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f08080',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
});
