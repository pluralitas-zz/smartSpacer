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
        <Image source={require('../assets/images/quickstart.png')} style={styles.QuickStartImage} />
        <View >
          <Link style ={styles.QuickStartText} href="/inhaler"> Quick Start </Link>
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

const deviceWidth = Math.round (Dimensions.get('window').width);
const radius = 20;
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
    borderRadius: radius,

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
  }

});