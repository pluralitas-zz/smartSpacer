import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import useBLE from "../useBLE";

export default function StepByStepGuide() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  // //Bluetooth items
  const DEVICE_NAME ='SmartSpacerBLE'; // BLE device name
  const SERVICE_UUID = '6d9a183a-2c79-4feb-9b69-7f8772a56c8d';
  const CHARACTERISTIC_UUID = 'd5a8a260-3ff0-4535-afe1-2c919441362a';

  // Import Bluetooth Functions
  const {
    requestPermissions,
    scanForPeripherals,
    // connectToDevice,
    disconnectFromDevice,
    connectedDevice,
    pressure,
    status,
  } = useBLE();

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Choose your technique:</Text>
        


        <Text> {status} </Text>
        <Text> {pressure} </Text>
        <Pressable style={styles.button} onPress={() => {connectedDevice ? disconnectFromDevice() : scanForDevices()}}>
            <Text>{connectedDevice ? 'Disconnect from Device' : 'Connect to Bluetooth Device'}</Text>
        </Pressable>

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
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    height: 150,
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

