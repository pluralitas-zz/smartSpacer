import React,{useState} from "react";

import { StyleSheet, View, Text } from "react-native";
import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {Picker} from "@react-native-picker/picker";

export default function Page() {
  const [pickerValue,setPickerValue] =useState("Select User")
  return (
    <View style ={styles.backgroundContainer}>
      <Text style = {styles.title}>Smart Spacer </Text>
      <Text style = {styles.subtitle}> Tracking your medication and condition in a reliable and no-hassle way.</Text>
    
      <View styles = {styles.paragraph}>
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
        </View>
      
      <View style= {styles.loginContainer}>
        <StartButton theme ="primary" label="Login " linkref="/main" />

      </View>
      <StatusBar style ="auto"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: "center",
    backgroundColor:'#8fbc8f',
    justifyContent: 'center',
  },
  title:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:32, 
    color:"#000000", 
    marginTop:300,
  },
  subtitle:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:15, 
    color:"#ffffff",
    marginTop:16, 
    marginHorizontal:24
  },
  picker:{
    marginTop:100,
    width: 300,
    height: 200,
    justifyContent:'center',
    alignContent:'center',
  },
  loginContainer: {
    alignItems: 'center',
    height:'90%',
    marginTop: 50,
    height: '50%'
  },

});


