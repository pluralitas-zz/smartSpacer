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
      <Text style = {styles.paragraph2}> Tracking your medication and condition in a reliable and no-hassle way.</Text>

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

      <View style= {styles.loginContainer}>
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

    paddingTop:300
  },
  loginContainer: {
    alignItems: 'center',
    height:'90%',
    marginTop: 150,
    height: '50%'
  },
  paragraph:{
    // margin: 24,
    fontSize: 32,
    fontWeight:'bold',
    textAlign: 'center',
    color:"#000000",
    height: '10%'
  },
  paragraph2:{
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
    color:"#ffffff",
    height: '10%'
  },
  picker:{
    width: 300,
    height: 40,
  }

});


