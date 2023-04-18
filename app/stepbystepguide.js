import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from 'react';
import useBLE from "../useBLE";


export default function StepByStepGuide() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>

      <View style={styles.main}>
        <Text style={styles.subtitle}>Choose your technique:</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/singlebreathhold')}>
          <Text style={styles.buttonText}>Single Breath and Hold </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tidalmultiple')}>
          <Text style={styles.buttonText}>Tidal or Multiple Breathing</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.text}>
            If you are not sure which technique to use, click the button below.
          </Text>
          <TouchableOpacity style={styles.checkButton} onPress={() => router.push('/breathingtechniques')}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 100,
    backgroundColor: "#f08080",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    paddingVertical:50,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical:30,
  },
  button: {
    width: "95%",
    height: '17%',
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  bottom: {
    marginTop: 30,
    alignItems: "center",
    
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal:20,
    marginTop:50,
    
  },
  checkButton: {
    width: 200,
    height: 60,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f08080",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",

  },
  checkButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

