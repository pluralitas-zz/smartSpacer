import { StyleSheet, View, Text, Dimensions,Image } from "react-native";
import { Link, useRouter, Stack } from "expo-router";



export default function Main() {

  const router = useRouter();
  return (
    <View style ={styles.container}>
      <Text style = {styles.welcomeLine}> Welcome Alex! </Text>

      {/* <View styles ={styles.AirQuality}>
        <View style ={styles.innerAirQualitytext}></View>
      </View> */}
      <View style ={styles.ContainerMain}>
        <View style ={styles.innerContainerMaintext}>
          <Link style ={{color:'#ffffff'}} href="/inhaler">Quick Start </Link>
        </View>
        <Image source={require('./assets/images/girl-spacer.jpg')} style={styles.QuickStartImage} />
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

const deviceWidth = Math.round (Dimensions.get('window').width);
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

  ContainerMain:{
    width:deviceWidth-40,
    backgroundColor:'#ff8c00',
    height: 200,
    borderRadius: 20,

    shadowColor:'#000',
    shadowOffset:{
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation:20,
  },
  QuickStartImage: {
    height: 200,
    width: deviceWidth-40,
  }

});