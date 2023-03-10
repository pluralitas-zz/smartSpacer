import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import useBLE from "../useBLE";

export default function Inhaler() {
  const router = useRouter();

  //Bluetooth items
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
  };

  return (
    <View style={{ flex: 1, fontsize: 50, justifyContent: "center", alignItems: "center" }}>
      <Text> {status} </Text>
      <Text> {pressure} </Text>

      <View style={{ flex: 1, fontsize: 50, justifyContent: "center", alignItems: "center" }}>
          <Pressable style={styles.button} onPress={() => {connectedDevice ? disconnectFromDevice() : scanForDevices()}}>
            <Text>{connectedDevice ? 'Disconnect from Device' : 'Connect to Bluetooth Device'}</Text>
          </Pressable>
        </View>

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