
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import useBLE from "../useBLE";
import { LineChart } from "react-native-chart-kit";
import { Defs, ClipPath, Rect } from 'react-native-svg';

// const { width } = Dimensions.get('window');

export default function statistics() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [inhale, setInhale] = useState(Array(30).fill(0.00));
  const [exhale, setExhale] = useState(Array(30).fill(0.00));
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);


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
    let [newExhale, newInhale] = pressure.split(",").map(parseFloat);
    if (isNaN(newExhale)) {
      newExhale = 0;
    }
    if (isNaN(newInhale)) {
      newInhale = 0;
    }
    setInhale(prevInhale => [...prevInhale.slice(1), newInhale]);
    setExhale(prevExhale => [...prevExhale.slice(1), newExhale]);
  }
  
  useEffect(() => {
    let intervalId;

    if (isRunning && count > 0) {
      intervalId = setInterval(() => {
        setCount(count => count - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, count]);

  const handleStart = () => {
    setIsRunning(true);
  };



  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48 }}>{count}</Text>
          <Pressable title="Start" onPress={handleStart} disabled={isRunning} />

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
        
        </View>

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
            labels: labels,
            datasets: [
              {
                data: exhale,
                strokeWidth: 3,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              },
              {
                data: inhale,
                strokeWidth: 3,
                color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
              },
            ],
          }}
          width={400}
          height={220}
          chartConfig={{
            backgroundColor: "#eff3ff",
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
          extraRNProps={{
            clipPath: "url(#chartArea)",
          }}
        >
          <Defs>
            <ClipPath id="chartArea">
              <Rect x="0" y="0" width="400" height="200" />
            </ClipPath>
          </Defs>
        </LineChart>


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



