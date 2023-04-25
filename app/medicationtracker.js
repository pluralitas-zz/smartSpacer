import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function MedicationTracker() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, fontsize: 32, justifyContent: "center", alignItems: "center" }}>
      <Text> Dosage Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { LineChart, YAxis } from 'react-native-svg-charts';

// export default function MedicationTracker() {
//   const [inhaleData, setInhaleData] = useState([]);
//   const [exhaleData, setExhaleData] = useState([]);

//   // function to parse raw data string and update inhale and exhale data lists
//   const updateData = (rawData) => {
//     const values = rawData.split(',');
//     const inhale = parseFloat(values[0]);
//     const exhale = parseFloat(values[1]);
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
