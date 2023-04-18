import { Tabs, Slot, Stack, useSearchParams } from "expo-router";

export default function FunctionLayout() {

  const searchParam = useSearchParams();
  console.log(searchParam);

  return (
		<Stack screenOptions={{headerTitleStyle: {fontWeight:"bold"}}}>

      {/* Naming the static screen headers */}
      <Stack.Screen name="index" options={{title:"Home", headerShown:false}}/>
      <Stack.Screen name="titlepage" options={{title:'Title Page', headerShown:false}}/>
      <Stack.Screen name="quickstart" options={{title:'Quick Start'}}/>
      <Stack.Screen name="spirometer" options={{title:'Spirometer'}}/>
      <Stack.Screen name="airquality" options={{title:'Air Quality'}}/>
      <Stack.Screen name="medicationtracker" options={{title:'Medication Tracker'}}/>
      <Stack.Screen name="breathingtechniques" options={{title:'Breathing Techniques'}}/>
      <Stack.Screen name="stepbystepguide" options={{title:'Guide'}}/>
      <Stack.Screen name="tidalmultiple" options={{title:'Tidal Breathing'}}/>
      <Stack.Screen name="singlebreathhold" options={{title:'Single Breath and Hold'}}/>
    </Stack>
  )
      
};

// export default Stack;

