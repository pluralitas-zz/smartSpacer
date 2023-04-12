import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  const [listValue, setListValue] = useState("");
  const router = useRouter();

  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.title}>Smart Spacer</Text>
      <Text style={styles.subtitle}>
        Tracking your medication and condition in a reliable and no-hassle way.
      </Text>

      <View style={styles.ModelImage}>
        <Image source={require("../assets/images/modelimage.png")} style={styles.ModelImage} />
      </View>

      <TouchableOpacity style={styles.loginContainer} onPress={() => router.push("/titlepage")}>
        <View style={styles.loginButton}>
          <Text style={styles.loginLabel}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.newuser} onPress={() => router.push("/createnewuser")}>
        <Text style={styles.newuserText}>Create New User</Text>
      </TouchableOpacity>

      <StatusBar style="auto" translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: "center",
    backgroundColor: "#0000ff",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "#ffffff",
    marginTop: 100,
  },
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff",
    marginTop: 16,
    marginHorizontal: 55,
  },
  ModelImage: {
    height: 160,
    width: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 25,
    marginBottom: 25,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  pickerLabel: {
    color: "#000000",
    fontSize: 15,
    marginTop: 16,
  },
  picker: {
    width: 300,
    // height: 200,
    // justifyContent:'center',
    alignContent: "center",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  loginContainer: {
    alignItems: "center",
    height: "10%",
    marginTop: 60,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 250,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLabel: {
    color: "#0000ff",
    fontWeight: "bold",
    fontSize: 20,
  },
  newuser: {
    marginTop: 5,
    marginHorizontal: 60,
  },
  newuserText: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffffff",
    
  },
});
