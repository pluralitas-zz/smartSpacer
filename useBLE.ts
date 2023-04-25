/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";
import base64 from "react-native-base64";

const DEVICE_NAME ='SmartSpacerBLE'; // BLE device name
const SERVICE_UUID = '6d9a183a-2c79-4feb-9b69-7f8772a56c8d'; // BLE service
const CHARACTERISTIC_UUID = 'd5a8a260-3ff0-4535-afe1-2c919441362a'; // BLE characteristic

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  connectToDevice: (deviceId: Device) => Promise<void>;
  disconnectFromDevice: () => void;
  connectedDevice: Device | null;
  allDevices: Device[];
  pressure: string;
  status: string;
}

function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [pressure, setPressure] = useState<string>('Not connected');
  const [status, setStatus] = useState<string>('Status')

  //request elevated permission to use Bluetooth
  const requestAndroid31Permissions = async () => {
    setStatus('requestAndroid31Permissions Started');
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const fineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    setStatus('requestAndroid31Permissions Granted');
    return (
      bluetoothScanPermission === "granted" &&
      bluetoothConnectPermission === "granted" &&
      fineLocationPermission === "granted"
    );
  };

  //request permission to use Bluetooth
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Bluetooth Low Energy requires Location",
            buttonPositive: "OK",
          }
        );
        setStatus('requestPermission Granted');
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else { //elevate for permissions if insufficient 
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();

        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const scanForPeripherals = () => {
    setStatus('Start scanning for ' + DEVICE_NAME)
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
      }
      if (device && device.name == DEVICE_NAME) {
        bleManager.stopDeviceScan();
        setStatus('Scan Success: ' + DEVICE_NAME + ' found.');
        connectToDevice(device);
      }
    });
  };

  //connect to BLE device after scan successful
  const connectToDevice = async (device: Device) => {
    setStatus('Connecting to device: ' + device.name);
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      setStatus('Discovering Services and Characteristics');
      await deviceConnection.discoverAllServicesAndCharacteristics();
      setStatus('Stop Scanning Device');
      bleManager.stopDeviceScan();
      startStreamingData(deviceConnection); //start streaming data
    } catch (e) {
      setStatus("FAILED TO CONNECT");
    }
  };

  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
      setStatus('Disconnected')
      setPressure('not Connected');
    }
  };

  // for cleaning the incoming data
  const onUpdate = (
    error: BleError | null,
    characteristic: Characteristic | null
  ) => {
    if (error) {
      console.log(error);
      return -1;
    } else if (!characteristic?.value) {
      console.log("No Data was recieved");
      return -1;
    }

    const rawData = base64.decode(characteristic.value);
    setPressure(rawData);
  };

  // Stream data from BLE service and characteristic
  const startStreamingData = async (device: Device) => {
    setStatus('Streaming from ' + device.name);
    if (device) {
      console.log('Monitoring characteristic');
      device.monitorCharacteristicForService(
        SERVICE_UUID,
        CHARACTERISTIC_UUID,
        onUpdate
      );
    } else {
      setStatus("No Device Connected");
    }
  };

  return {
    requestPermissions,
    scanForPeripherals,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
    pressure,
    status
  };
}

export default useBLE;