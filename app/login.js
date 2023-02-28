import { StyleSheet, View, Text } from "react-native";

import StartButton from "../func/StartButton";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";
import Constants from "expo-constants";
import useState from 'react-hook-use-state';




export default function Page() {

  return (
    <View style ={styles.container}>
      <Text style = {styles.paragraph}>Smart Spacer </Text>
      <Text style = {styles.paragraph2}>
        A one-stop application that helps you to track your doses and asthma condition!
      </Text>
      <DropDownPicker
        items = {[
          {label:'Alex', value:'item 1', selected: true},
          {label:'Benard', value:'item 2'},
          {label:'New User', value:'item 3'}
        ]}
        defaultIndex={0}
        // defaultNull
        // placeholder= "Select a user"
        containerStyle = {{height:40}}
        onChangeItem = {item => console.log(item.label, item.value)}
      />


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
    paddingTop: Constants.statusBarHeight,
    padding: 8,
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
    flex:2/3,
    alignItems: 'center',
  },
  paragraph:{
    margin: 24,
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center',
    color:"#ffffff"
  },
  paragraph2:{
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
    color:"#ffffff"
  },

});


