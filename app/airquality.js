import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AirQuality() {
  // Replace these placeholder values with actual data
  const psi24h = 60;
  const psi3h = 70;
  const pm25Hourly = 25;
  const temperature = 28;

  // Determine the air quality level based on the data
  let airQualityLevel = '';
  if (psi24h < 50 && pm25Hourly < 12.1) {
    airQualityLevel = 'Good';
  } else if (psi24h < 100 && pm25Hourly < 35.5) {
    airQualityLevel = 'Moderate';
  } else {
    airQualityLevel = 'Unhealthy';
  }

  // Determine the color of the circular design based on the air quality level
  let airQualityColor = '';
  if (airQualityLevel === 'Good') {
    airQualityColor = '#228b22';
  } else if (airQualityLevel === 'Moderate') {
    airQualityColor = '#ff8c00';
  } else {
    airQualityColor = '#b22222';
  }

  return (
    <View style={styles.container}>
      {/* Circular design */}
      <View style={[styles.circle, { backgroundColor: airQualityColor }]}>
        {/* <MaterialCommunityIcons name="weather-sunny" size={48} color="#fff" /> */}
        <Text style={styles.airQualityText}>{airQualityLevel}</Text>
      </View>

      {/* Temperature and PM2.5 Hourly data */}
      <View style={styles.row}>
        <View style={[styles.dataContainer, { backgroundColor: '#ADD8E6' }]}>
          <MaterialCommunityIcons name="thermometer" size={35} color="#0077be" />
          <Text style={styles.dataText}>Temperature</Text>
          <Text style={styles.dataText}>{temperature}°C</Text>
        </View>
        <View style={[styles.dataContainer, { backgroundColor: '#FFDAB9' }]}>
          <MaterialCommunityIcons name="cloud-outline" size={35} color="#0077be" />
          <Text style={styles.dataText}>PM2.5 Hourly</Text>
          <Text style={styles.dataText}>{pm25Hourly}</Text>
        </View>
      </View>

      {/* PSI 24h and PSI 3h data */}
      <View style={styles.row}>
        <View style={[styles.dataContainer, { backgroundColor: '#ADD8E6' }]}>
          <MaterialCommunityIcons name="blur" size={35} color="#0077be" />
          <Text style={styles.dataText}>PSI 24h</Text>
          <Text style={styles.dataText}>{psi24h}</Text>
        </View>
        <View style={[styles.dataContainer, { backgroundColor: '#FFDAB9' }]}>
          <MaterialCommunityIcons name="blur-linear" size={35} color="#0077be" />
          <Text style={styles.dataText}>PSI 3h</Text>
          <Text style={styles.dataText}>{psi3h}</Text>
        </View>
      </View>


      <View style={styles.container}>
        {/* Your existing code goes here */}
        <View style={styles.footer}>
          <Text style={styles.dataFooter}>Contains information accessed today from NEA which is made available under the terms of the Singapore Open Data Licence version 1.0 </Text>
        </View>
      </View>
    </View>
  );
}

// [Contains information from {name of dataset} accessed on {date of access of dataset} from {source of data} which is made available under the terms of the Singapore Open Data Licence version 1.0 {URL link to licence}]*



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:60,
  },
  airQualityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  dataContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  data: {
    fontSize: 25,
    textAlign: 'center',
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#f4f4f4',
    paddingVertical: 0,
    paddingHorizontal: 40,
    fontSize: 3,
    textAlign: 'center',
  },
  dataFooter: {
    fontSize: 6,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

});
