import { StyleSheet, View, Text, Dimensions,Image,FlatList,ScrollView } from "react-native";
import { Link, useRouter, Stack } from "expo-router";

const DATA =[
  {
    name:'Air Quality',
    image: require ('../assets/images/quickstart.png'),
    id:1,
  },
  {
    name:'Quick Start',
    image: require('../assets/images/quickstart.png'),
    link: href = "/inhaler",
    id:2,
  },
  {
    name:'Spirometer',
    image: require ('../assets/images/quickstart.png'),
    link: href = "/Spirometer",
    id:3,
  },
  {
    name: 'Tips',
    image: require ('../assets/images/quickstart.png'),
    id:4,
  },
  {
    name:'Statistics',
    image: require ('../assets/images/quickstart.png'),
    id:5
  },

]

export default function Main() {
  const router = useRouter();
  return (
    <View style ={styles.container}>
      <Text style = {styles.welcomeLine}> Welcome Alex! </Text>

      <ScrollView style ={styles.scrollView}>

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

        <Text 
          onPress={() => {
            // Go back to the previous screen using the imperative API.
            router.back();
          }}
        >
          Log out
        </Text>

      </ScrollView>
    </View>
  );
}


const deviceWidth = Math.round (Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#8fbc8f', 
    // another colour: fff8dc
    alignItems: "center",
    // justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: '8fbc8f',
    marginHorizontal: 10,
  },


  welcomeLine:{
    margin: 2,
    fontSize: 24,
    fontWeight:'bold',
    color:"#000000",
    paddingTop: 50,
    height:'15%',

  },
  
  AirQualityC:{
    width:deviceWidth-40,
    backgroundColor:'#f5f5dc',
    height: 200,
    borderRadius: radius,
    marginTop: 10,
    shadowColor:'#000',
    shadowOffset:{
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation:20,
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
});