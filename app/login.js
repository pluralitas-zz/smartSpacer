import React,{useState} from "react";

import { StyleSheet, View, Text, Dimensions, Image} from "react-native";
import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";

// import Constants from "expo-constants";

export default function Page() {
  const [listValue,setListValue] =useState("");

  // const username = [
  //   {userid: '1', username: "Alex"},
  //   {userid: '2', username: "Bernard"},
  // ];

  return (
    <View style ={styles.backgroundContainer}>
      <Text style = {styles.title}>Smart Spacer </Text>
      <Text style = {styles.subtitle}> Tracking your medication and condition in a reliable and no-hassle way.</Text>
    
      {/* <View styles = {styles.paragraph}>

        <SelectList data={username} setSelected={setListValue} />

        </View> */}
      <View style ={styles.ModelImage}>
          <Image source={require('../assets/images/modelimage.png')} style={styles.ModelImage} />
      </View>

      <View style= {styles.loginContainer}>
        <StartButton theme ="primary" label="Login " linkref="/main" value={listValue}/>
      </View>

      <Text style ={styles.newuser}> Create New User </Text>

      <StatusBar style = "auto" translucent={true} />
    </View>

    
    
  );
}
const deviceWidth = Math.round (Dimensions.get('window').width);
const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: "center",
    backgroundColor:'#0000ff',
    justifyContent: 'center',
    height:'100%',
  },
  title:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:30, 
    color:"#ffffff", 
    marginTop:100,

  },
  subtitle:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:14, 
    color:"#ffffff",
    marginTop:16, 
    marginHorizontal:55
  },
  ModelImage: {
    height: 160,
    width: deviceWidth-40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop:25,
    marginBottom:25,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center'
  },



  pickerLabel:{    
    color:"#000000",
    fontSize:15,
    marginTop:16,
  },
  picker:{
    width: 300,
    // height: 200,
    // justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#fff',
    marginTop:30
  },
  loginContainer: {
    alignItems: 'center',
    height:'10%',
    marginTop: 60,
    marginBottom:5,

  },
  newuser:{
    textAlign: 'center',
    fontSize:15, 
    color:"#ffffff",
    marginTop:5, 
    marginHorizontal:60
  },

});


