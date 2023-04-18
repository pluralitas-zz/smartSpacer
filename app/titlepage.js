import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons,AntDesign,FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
const { width } = Dimensions.get('window');

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Spacer</Text>
        <MaterialCommunityIcons name="pill" size={35} color="#000" />
        <Text style={styles.headertext}>200</Text>
        {/* need to update the dosage from the quick start */}
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.medicineButton, styles.medicationTracker]} onPress={() => router.push('/medicationtracker')}>
          <MaterialCommunityIcons name="bell" size={80} color="white" />
          <Text style={styles.buttonText}>Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.airQuality]} onPress={() => router.push('/airquality')}>
          <AntDesign name="cloud" size={70} color="white" />
          <Text style={styles.buttonText}>Air Quality</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.quickStart]} onPress={() => router.push('/quickstart')}>
          <FontAwesome name="play" size={70} color="white" />
          <Text style={styles.buttonText}>Quick Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.spirometer]} onPress={() => router.push('/spirometer')}>
          <FontAwesome5 name="lungs" size={70} color="white" />
          <Text style={styles.buttonText}>Spirometer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.statistics]} onPress={() => router.push('/statistics')}>
          <FontAwesome name="bar-chart" size={70} color="white" />
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#6A5ACD',
    paddingHorizontal: 15,
    height: 60,
    width: '100%',
  },
  headertext:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingBottom:50,
  },
  button: {
    width: '42%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 20,
    marginHorizontal: '3%',
  },
  medicineButton:{
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 20,
    marginHorizontal: '3%',
    marginBottom:30,
  },
  medicationTracker: {
    backgroundColor: '#b0c4de',
    width: '90%',
    marginHorizontal: '3%',
    marginTop: '5%',
    // paddingBottom:10,
  },
  airQuality: {
    backgroundColor: '#f5f5dc',
  },
  quickStart: {
    backgroundColor: '#ff8c00',
  },
  spirometer: {
    backgroundColor: '#f08080',
    marginTop: '15%',
  },
  statistics: {
    backgroundColor: '#add8e6',
  },
 
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    paddingTop:15,
  },
  
});
