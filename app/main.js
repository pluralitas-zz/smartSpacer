import React from 'react';
import { StyleSheet, View, Text, Dimensions,Image,FlatList,ScrollView,Pressable } from "react-native";
import { Link, useRouter, Stack } from "expo-router";
import StartButton from "../func/StartButton";
import Entypo from "@expo/vector-icons/Entypo";
import BoxesButton from '../func/Boxes';



export default function Main() {
  const router = useRouter();


  return (

    <View style ={styles.container}>
      <Text style ={styles.welcomesean}> Welcome Sean! </Text>
      <ScrollView>
        {/* <View style ={styles.longhoriContainer}>
          <View style ={styles.optionsRow}>
          <View style= {styles.QuickStartContainer}>
            <QuickStart theme ="primary" label="Login " linkref="/inhaler" value={listValue}/>
          </View>

          </View>
        </View> */}
        



        <View style ={styles.AirQualityC}>
          <Image source={require('../assets/images/sgphoto.jpg')} style={styles.AirQualityImage} />
          <View >
            <Link style ={styles.QuickStartText} href="/airquality"> Air Quality </Link>
          </View>
          
        </View>

        <View style ={styles.QuickStartC}>
          <Image source={require('../assets/images/quickstart.png')} style={styles.QuickStartImage} />
          <View >
            <Link style ={styles.QuickStartText} href="/inhaler"> Quick Start </Link>
          </View>
          
        </View>

        <View style ={styles.SpirometerC}>
          <Image source={require('../assets/images/inhaler.png')} style={styles.SpirometerImage} />
          <View >
            <Link style ={styles.SpirometerText} href="/spirometer"> Spirometer </Link>
          </View>
          
        </View>

        <View style ={styles.StatisticsC}>
          <Image source={require('../assets/images/statistics2.png')} style={styles.StatisticsImage} />
          <View >
            <Link style ={styles.StatisticsText} href="/airquality"> Statistics </Link>
          </View>
          
        </View> 

        <View style= {styles.logoutContainer}>
          <StartButton theme ="logout" label="Logout " linkref="/login" />
        </View>


      </ScrollView>
    </View>
  );
}


const deviceWidth = Math.round (Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#0000ff', 
    // another colour: fff8dc
    alignItems: "center",
    // justifyContent: 'center',

  },

  scrollView: {
    backgroundColor: 'ffffff',
    marginHorizontal: 10,
  },

  welcomesean:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:20, 
    color:"#000000", 
    marginTop:75,
    marginBottom:50,
  },

  longhoriContainer: {
    width: deviceWidth-40,
    height: 200,
    marginHorizontal: 20,
    // position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000',
  },

    optionsRow:{
      alignItems:'center',
      flexDirection:'row',
    },

  AirQualityC:{
    width:deviceWidth-40,
    backgroundColor:'#f5f5dc',
    height: 200,
    borderRadius: radius,
    marginTop: 10,
    shadowColor:'#000',
    shadowOffset:{
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation:10,
  },

  AirQualityImage: {
    height: 160,
    width: deviceWidth-40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center'
  },
  AirQualityText:{
    fontSize:20,
    fontWeight:'800'
  },
  QuickStartC:{
    width:deviceWidth-40,
    backgroundColor:'#ff8c00',
    height: 200,
    borderRadius: radius,
    marginTop: 20,
    shadowColor:'#000',
    shadowOffset:{
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation:20,
  },
  QuickStartImage: {
    height: 160,
    width: deviceWidth-40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center'
  },
  QuickStartText:{
    fontSize:20,
    fontWeight:'800'
  },

  SpirometerC:{
    width:deviceWidth-40,
    backgroundColor:'#f08080',
    height: 200,
    borderRadius: radius,
    marginTop: 20,
    shadowColor:'#000',
    shadowOffset:{
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation:20,
  },

  SpirometerImage: {
    height: 160,
    width: deviceWidth-40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center'
  },
  SpirometerText:{
    fontSize:20,
    fontWeight:'800'
  },

  
  StatisticsC:{
    width:deviceWidth-40,
    backgroundColor:'#f5f5dc',
    height: 200,
    borderRadius: radius,
    marginTop: 20,
    shadowColor:'#000',
    shadowOffset:{
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation:20,

  },

  StatisticsImage: {
    height: 160,
    width: deviceWidth-40,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity:0.9,
    alignContent:'center',
    alignSelf:'center'
  },
  StatisticsText:{
    fontSize:20,
    fontWeight:'800'
  },

  logoutContainer: {
    alignItems: 'center',
    height:'10%',
    marginTop: 50,
    marginBottom:50,

    

  },
});