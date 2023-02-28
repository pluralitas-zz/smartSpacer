import { StyleSheet, View, Text } from "react-native";
import { Link, useRouter, Stack } from "expo-router";

export default function Main() {
  const router = useRouter();
  return (
    <View style ={styles.container}>
      
      <Link style ={{color:'#696969'}} href="/inhaler">Quick Start</Link>
      <Link style ={{color:'#696969'}} href="/spirometer">Spirometer</Link>

      <Text 
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}

      >
        Log out
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#242424',
    alignItems:'center',
    justifyContent: 'center',
  },
});