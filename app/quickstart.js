import { StyleSheet, Text, View, Pressable, TouchableOpacity, Modal } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import useBLE from "../useBLE";
import { LineChart } from "react-native-chart-kit";
import { Defs, ClipPath, Rect } from 'react-native-svg';

export default function StepByStepGuide() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [inhale, setInhale] = useState(Array(30).fill(0.00));
  const [exhale, setExhale] = useState(Array(30).fill(0.00));
  
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  // // //Bluetooth items
  const DEVICE_NAME ='SmartSpacerBLE'; // BLE device name
  const SERVICE_UUID = '6d9a183a-2c79-4feb-9b69-7f8772a56c8d';
  const CHARACTERISTIC_UUID = 'd5a8a260-3ff0-4535-afe1-2c919441362a';

  // // Import Bluetooth Functions
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

    if (count === 0) {
      clearInterval(intervalId);
      setModalVisible(false);
      setIsRunning(false);
      setCount(10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, count]);

  const handleStart = () => {
    setIsRunning(true);
    setModalVisible(true);
  };


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Choose your technique:</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, selected === 'tidal' && styles.selectedButton]} 
            onPress={() => handleButtonPress('tidal')}
          >
            <Text style={styles.buttonText}>Tidal</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, selected === 'single' && styles.selectedButton]} 
            onPress={() => handleButtonPress('single')}
          >
            <Text style={styles.buttonText}>Single</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.checkButton} onPress={handleStart} disabled={isRunning}>
            <Text style={styles.checkButtonText}> {isRunning ? 'Recording...' : 'Start'} </Text>
          </TouchableOpacity>

        <Modal visible={modalVisible} transparent={true}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 48 }}>{count}</Text>
            </View>
          </View>
        </Modal>
        


        {/* <Text> {status} </Text>
        <Text> {pressure} </Text>
        <Pressable style={styles.connectbutton} onPress={() => {connectedDevice ? disconnectFromDevice() : scanForDevices()}}>
            <Text>{connectedDevice ? 'Disconnect from Device' : 'Connect to Bluetooth Device'}</Text>
        </Pressable> */}



        {/* <LineChart
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
            marginTop: 20,
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
        </LineChart> */}


        <View style={styles.bottom}>
          <Text style={styles.text}> If you are not sure which technique to use, click the button below. </Text>
          <TouchableOpacity style={styles.checkButton} onPress={() => router.push('/breathingtechniques')}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>



      </View>

      {/* =======
        <View style={{ flex: 1, fontsize: 50, justifyContent: "center", alignItems: "center" }}>


      <View style={{ flex: 1, fontsize: 50, justifyContent: "center", alignItems: "center" }}>
          <Pressable style={styles.button} onPress={() => {connectedDevice ? disconnectFromDevice() : scanForDevices()}}>
            <Text>{connectedDevice ? 'Disconnect from Device' : 'Connect to Bluetooth Device'}</Text>
          </Pressable>
        </View> */}
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
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
  },
  connectbutton: {
    height: 50,
    width:320,
    // margin: 70,
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
    marginTop: 100,
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

