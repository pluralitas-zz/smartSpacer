import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function startButton({ theme, label, linkref }) {
    if (theme ="loginMenu"){
        return (
            <View style={[styles.startButtonContainer,{borderWidth:4,borderColor:"#000000",borderRadius:18,backgroundColor:"#8fbc8f"}]}>
              <Link style ={styles.startButtonLabel} href={linkref}> {label} 
              <Entypo name="login" size={35} color="#000000" style={styles.buttonIcon}/>
              </Link>
            </View>
        );
    }

else if (theme ="Next"){
  return (
      <View style={[styles.startButtonContainer,{borderWidth:4,borderColor:"#000000",borderRadius:18,backgroundColor:"#add8e6"}]}>
        <Link style ={styles.startButtonLabel} href={linkref}> 

          {label} </Link>
      </View>
  );
}
}

const styles = StyleSheet.create({
  startButtonContainer: {
    width: 180,
    height: 80,
    marginHorizontal: 20,
    marginTop: 400,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  startButton: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  startButtonLabel: {
    color: '#000000',
    fontWeight: "bold",
    fontSize: 25,
  },
});