import { StyleSheet, View } from "react-native";

import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";


export default function Page() {
  return (
    <View style ={styles.container}>

      <View style= {styles.footerContainer}>

        <StartButton theme ="primary" label="Login " linkref="/main" />

      
      </View>
      <StatusBar style ="auto"/>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'#8fbc8f',
    justifyContent: 'center',
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
  footerContainer: {
    flex:1/3,
    alignItems: 'center',
    
  },
});


