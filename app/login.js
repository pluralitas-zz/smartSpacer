import React,{useState} from "react";

import { StyleSheet, View, Text } from "react-native";
import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {Picker} from "@react-native-picker/picker";




export default function Page() {
  const [pickerValue,setPickerValue] =useState("Select User")
  return (
    <View style ={styles.container}>
      <Text style = {styles.paragraph}>Smart Spacer </Text>
      <Text style = {styles.paragraph2}> A one-stop application that helps you to track your doses and asthma condition!</Text>

      <Picker
        style = {styles.picker}
        selectedValue={pickerValue}
        onValueChange={(itemValue) =>setPickerValue(itemValue)}
      >
        <Picker.Item label ="Select User" value="Select User"/>
        <Picker.Item label ="Alex" value="Alex"/>
        <Picker.Item label ="Benard" value="Benard"/>
        <Picker.Item label ="Create New User!" value="Create New User!"/>
      </Picker>

      <View style= {styles.footerContainer}>
        <StartButton theme ="primary" label="Login " linkref="/main" />


      </View>
      <StatusBar style ="auto"/>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'#8fbc8f',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 10,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  footerContainer: {
    flex:12/16,
    alignItems: 'center',
  },
  paragraph:{
    margin: 24,
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center',
    color:"#ffffff"
  },
  paragraph2:{
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
    color:"#ffffff"
  },
  picker:{
    width: 300,
    height: 40

  }

});


