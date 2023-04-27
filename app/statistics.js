import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { getData,storeData } from "../useStorage";
// import useBLE from "../useBLE";

export default function statistics() {
  const router = useRouter();
  const [doseStr, setdoseStr] = useState('')

  const updateDose = async () => {
    const value = await getData('doses');
    const doseStrNew = (parseInt(value, 10) - 1).toString();
    setdoseStr(doseStrNew);
    await storeData('doses', doseStrNew);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}></Text>

        <Text> {doseStr} </Text>
        {/* <Text> {pressure} </Text> */}
        <Pressable style={styles.button} onPress={() => {updateDose()}}>
            <Text>{'Get Dosage'}</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => {alert('not used')}}>
            <Text>{'Disconnect from Device'}</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 100,
    backgroundColor: "#f08080",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  main: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
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
  bottom: {
    marginTop: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop:50,
  },
  checkButton: {
    width: 200,
    height: 60,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f08080",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
  },
  checkButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});


// import { StyleSheet, Text, View, Pressable } from "react-native";
// import { useRouter } from "expo-router";
// import React, { useState } from 'react';
// import useBLE from "../useBLE";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // import graphBLE from "../MovingTimeGraph"


// export default function statistics() {
//   const router = useRouter();
//   const [selected, setSelected] = useState(null);
//   // //Bluetooth items
//   const DEVICE_NAME ='SmartSpacerBLE'; // BLE device name
//   const SERVICE_UUID = '6d9a183a-2c79-4feb-9b69-7f8772a56c8d';
//   const CHARACTERISTIC_UUID = 'd5a8a260-3ff0-4535-afe1-2c919441362a';

//   // Import Bluetooth Functions
//   const {
//     requestPermissions,
//     scanForPeripherals,
//     // connectToDevice,
//     disconnectFromDevice,
//     connectedDevice,
//     pressure,
//     status,
//   } = useBLE();

//   const scanForDevices = async () => {
//     const isPermissionsEnabled = await requestPermissions();
//     if (isPermissionsEnabled) {
//       scanForPeripherals();
//     }
//   }



//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>

//         <Text> {status} </Text>
//         <Text> {pressure} </Text>
//         <Pressable style={styles.button} onPress={() => {connectedDevice ? disconnectFromDevice() : scanForDevices()}}>
//             <Text>{connectedDevice ? 'Disconnect from Device' : 'Connect to Bluetooth Device'}</Text>
//         </Pressable>

//       </View>

      


//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   main: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   button: {
//     height: 50,
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ff8c00",
//     borderRadius: 15,
//     borderWidth: 3,
//     borderColor: "#000",
//   },
//   selectedButton: {
//     backgroundColor: '#d16002',
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//     marginTop:50,
//   },
// });

///---///

// import { StyleSheet, Text, View, Pressable } from "react-native";
// import { useRouter } from "expo-router";
// import React, { useState, useEffect } from "react";
// import useBLE from "../useBLE";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { LineChart } from "react-native-chart-kit";

// export default function statistics() {
//   const router = useRouter();
//   const [selected, setSelected] = useState(null);
//   const [data, setData] = useState([]);
//   const [labels, setLabels] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         data: [],
//       },
//     ],
//   });
//   const [chartConfig, setChartConfig] = useState({
//     backgroundColor: "#fff",
//     backgroundGradientFrom: "#fff",
//     backgroundGradientTo: "#fff",
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//   });

//   //Bluetooth items
//   const DEVICE_NAME = "SmartSpacerBLE"; // BLE device name
//   const SERVICE_UUID = "6d9a183a-2c79-4feb-9b69-7f8772a56c8d";
//   const CHARACTERISTIC_UUID = "d5a8a260-3ff0-4535-afe1-2c919441362a";

//   // Import Bluetooth Functions
//   const {
//     requestPermissions,
//     scanForPeripherals,
//     connectToDevice,
//     disconnectFromDevice,
//     connectedDevice,
//     pressure,
//     status,
//   } = useBLE();

//   const scanForDevices = async () => {
//     const isPermissionsEnabled = await requestPermissions();
//     if (isPermissionsEnabled) {
//       scanForPeripherals();
//     }
//   };

//   useEffect(() => {
//     if (pressure) {
//       const [value1, value2] = pressure.split(",");
//       setData([...data, { x: data.length, y: Number(value1) }]);
//       setLabels([...labels, data.length.toString()]);
//     }
//   }, [pressure]);

//   useEffect(() => {
//     setChartData({
//       labels: labels,
//       datasets: [
//         {
//           data: data,
//         },
//       ],
//     });
//   }, [data, labels]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text> {status} </Text>
//         <Text> {pressure} </Text>
//         <Pressable
//           style={styles.button}
//           onPress={() =>
//             connectedDevice ? disconnectFromDevice() : scanForDevices()
//           }
//         >
//           <Text>
//             {connectedDevice
//               ? "Disconnect from Device"
//               : "Connect to Bluetooth Device"}
//           </Text>
//         </Pressable>





//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   main: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   button: {
//     height: 50,
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ff8c00",
//     borderRadius: 15,
//     borderWidth: 3,
//     borderColor: "#000",
//   },
//   selectedButton: {
//     backgroundColor: '#d16002',
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 10,
//     marginTop:50,
//     fontWeight: "bold",
//   },
//   chart: {
//     width: '90%',
//     height: 200,
//   },
// });