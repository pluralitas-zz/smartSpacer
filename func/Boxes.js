import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function startButton({ theme, label, linkref, value }) {
    if (theme ="loginMenu"){
        return (
            <View style={[styles.BoxesContainer,{borderWidth:4,borderColor:"#0000ff",borderRadius:18,backgroundColor:"#ffffff"}]}>
              <Link style ={styles.startButtonLabel} href={linkref}> {label} 
              <Entypo name="user" size={25} color="#0000ff" style={styles.buttonIcon}/>
              </Link>
            </View>
        );
    }

else if (theme ="Next"){
  return (
      <View style={[styles.startButtonContainer,{borderWidth:4,borderColor:"#000000",borderRadius:18,backgroundColor:"#8b0000"}]}>
        <Link style ={styles.startButtonLabel} href={'/main'}> 

          {label} </Link>
      </View>
  );
}
}

const styles = StyleSheet.create({
BoxesButton: {
    width: (deviceWidth-60)/2 ,
    height: 50,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
BoxesContainer: {
    width: 300,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,

  },
BoxesButtonLabel: {
    color: '#000000',
    fontWeight: "bold",
    fontSize: 20,
  },
});