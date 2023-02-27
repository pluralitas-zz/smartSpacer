import { Tabs, Slot, Stack, useSearchParams } from "expo-router";

export default function FunctionLayout() {

  const searchParam = useSearchParams();
  console.log(searchParam);

  return (
		<Stack screenOptions={{headerTitleStyle: {fontWeight:"bold"}}}>

      {/* Naming the static screen headers */}
      <Stack.Screen name="index" options={{title:"Home", headerShown:false}}/>
      <Stack.Screen name="main" options={{title:'Main Menu', headerShown:false}}/>
      <Stack.Screen name="inhaler" options={{title:'Quick Start'}}/>
      <Stack.Screen name="spirometer" options={{title:'Spirometer'}}/>
            
    </Stack>
  )
      
};

// export default Stack;

