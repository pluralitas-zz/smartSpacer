// import { StyleSheet, Text, View } from "react-native";
// import { useRouter } from "expo-router";

// export default function MedicationTracker() {
//   const router = useRouter();
//   return (
//     <View style={{ flex: 1, fontsize: 32, justifyContent: "center", alignItems: "center" }}>
//       <Text> Dosage Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { LineChart, YAxis } from 'react-native-svg-charts';

// export default function MedicationTracker() {
//   const [inhaleData, setInhaleData] = useState([]);
//   const [exhaleData, setExhaleData] = useState([]);

//   // function to parse raw data string and update inhale and exhale data lists
//   const updateData = (rawData) => {
//     const values = rawData.split(',');
//     const inhale = parseFloat(values[1]);
//     const exhale = parseFloat(values[0]);
//     if (inhaleData.length >= 100) {
//       setInhaleData(inhaleData.slice(1));
//       setExhaleData(exhaleData.slice(1));
//     }
//     setInhaleData((prevData) => [...prevData, inhale]);
//     setExhaleData((prevData) => [...prevData, exhale]);
//   };

//   // example loop to continuously update data
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const rawData = '5.00, 10.00'; // example raw data
//       updateData(rawData);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.chart}>
//         <YAxis
//           data={inhaleData.concat(exhaleData)}
//           contentInset={{ top: 20, bottom: 20 }}
//           svg={{ fontSize: 10, fill: 'grey' }}
//           numberOfTicks={10}
//           formatLabel={(value) => `${value.toFixed(2)} Pa`}
//         />
//         <LineChart
//           style={{ flex: 1, marginLeft: 16 }}
//           data={inhaleData}
//           svg={{ stroke: 'red' }}
//           contentInset={{ top: 20, bottom: 20 }}
//         >
//           <LineChart data={exhaleData} svg={{ stroke: 'blue' }} />
//         </LineChart>
        
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chart: {
//     flexDirection: 'row',
//     height: 200,
//     width: '90%',
//   },
// });


import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import useBLE from "../useBLE";
import { LineChart } from "react-native-chart-kit";
// const { width } = Dimensions.get('window');

export default function statistics() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [inhale, setInhale] = useState(Array(100).fill(0.00));
  const [exhale, setExhale] = useState(Array(100).fill(0.00));


  //Bluetooth items
  const DEVICE_NAME = "SmartSpacerBLE"; // BLE device name
  const SERVICE_UUID = "6d9a183a-2c79-4feb-9b69-7f8772a56c8d";
  const CHARACTERISTIC_UUID = "d5a8a260-3ff0-4535-afe1-2c919441362a";

  // Import Bluetooth Functions
  const {
    requestPermissions,
    scanForPeripherals,
    connectToDevice,
    disconnectFromDevice,
    connectedDevice,
    pressure,
    status,
  } = useBLE();



  useEffect(() => {
    if (pressure) {
      updateValues(pressure);
    }
  }, [pressure]);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  function updateValues(pressure) {
    const [newExhale, newInhale] = pressure.split(',').map(parseFloat);
    setInhale(prevInhale => [...prevInhale.slice(1), newInhale]); 
    setExhale(prevExhale => [...prevExhale.slice(1), newExhale]); 
    console.log (exhale)
    console.log (inhale)
  }


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text> {status} </Text>
        <Text> {pressure} </Text>
        <Pressable
          style={styles.button}
          onPress={() => 
            connectedDevice ? disconnectFromDevice() : scanForDevices()
          }
        >
          <Text>
            {connectedDevice
              ? "Disconnect from Device"
              : "Connect to Bluetooth Device"}
          </Text>
        </Pressable>

        <Text>Exhale: {JSON.stringify(exhale)}</Text>
        <Text>Inhale: {JSON.stringify(inhale)}</Text>

        
        <LineChart
        data={{
          // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: exhale,
              strokeWidth: 3,
            },
          ],
        }}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: '#eff3ff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
  },
  selectedButton: {
    backgroundColor: '#d16002',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop:50,
    fontWeight: "bold",
  },

});