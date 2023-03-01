import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Link, useRouter, Stack } from "expo-router";

export default function Main() {

  const router = useRouter();
  return (
    <View style ={styles.container}>
      <Text style = {styles.welcomeLine}> Welcome Alex! </Text>
      <View style ={styles.box1}>
        <Text style ={{color:'#ffffff'}}>Air Quality </Text>
      </View>
      <View style ={styles.box2}>
        <View style ={styles.innerBox2text}>
          <Link style ={{color:'#ffffff'}} href="/inhaler">Quick Start </Link>
        </View>
      </View>

      <View style ={styles.box3}>
        <View style ={styles.innerBox3text}>
          <Link style ={{color:'#ffffff'}} href="/spirometer">Spirometer </Link>
        </View>
      </View>

      <Text 
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}

      >
        Log out
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff8dc',
    alignItems: "center",
    // justifyContent: 'center',
  },
  welcomeLine:{
    margin: 2,
    fontSize: 24,
    fontWeight:'bold',
    color:"#000000",
    paddingTop: 50,
    height:'15%',

  },
  box1:{
    width:350,
    height:130,
    backgroundColor:'#000000',
    borderRadius:12,
    paddingTop:10,
    paddingLeft: 20,
    paddingVertical:50,
    height:'15%'
  


  },
  box2:{
    width:350,
    height:500,
    backgroundColor:'#000000',
    borderRadius:12,
    paddingTop:30,
    height:'15%'
  },
  box3:{
    width:350,
    height:500,
    backgroundColor:'#000000',
    borderRadius:12,
    paddingTop:30,
    height:'15%'
  }
});