import { View, Text } from "react-native";
import { Link, useRouter, Stack } from "expo-router";

export default function Main() {
  const router = useRouter();
  return (
    <View style= {{flex:1, justifyContent:"center", alignItems:"center"}}>

      <Link href="inhaler">Quick Start</Link>
      <Link href="spirometer">Spirometer</Link>
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