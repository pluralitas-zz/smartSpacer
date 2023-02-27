import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import startButton from './functions/startbutton';
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <View style ={styles.container}>
      <Link href="/main"> Log In </Link>
      <View style= {styles.footerContainer}>
        <startButton theme ="primary" label ="Login" />
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


