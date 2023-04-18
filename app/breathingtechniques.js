import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal,TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import Swiper from 'react-native-swiper';

export default function BreathingTechniques() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (index) => {
    setActiveIndex(index);
  }

  return (
    // <Modal animationType="slide" visible={true}>
      <View style={styles.container}>
        <Swiper showsButtons={false} loop={false} onIndexChanged={handleIndexChange} index={activeIndex}>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Single Breath and Hold Technique</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>- Recommended for patients who can coordinate breathing with inhaler</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Involves taking a slow, deep breath through the spacer while simultaneously pressing the inhaler, holding your breath for 10 seconds before exhaling slowly.</Text>
          </View>

          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Tidal or Multiple Breathing Technique</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Recommended for patients with difficulty coordinating breathing and the use of inhalers, e.g. children and elderly patients. </Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Also recommended if you are:</Text>
            <Text style={[styles.list, {textAlign: 'justify'}]}>- Unable to hold your breath for 5 seconds after using your inhaler</Text>
            <Text style={[styles.list, {textAlign: 'justify'}]}>- Having an asthma attack</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Involves taking several normal breaths in and out through the spacer after each puff of medication.</Text>
          </View>


        </Swiper>
        <View style={styles.footer}>
          <Text style={styles.note}>Consult your doctor for guidance on the appropriate breathing technique for you.</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('/stepbystepguide')}>
            <Text style={styles.buttonText}>Step-by-Step Guide</Text>
        </TouchableOpacity>

      </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  slide: {
    flex: 1,
    marginTop: 10, // set the top margin to 50
    marginLeft: 20, // set the left margin to 20
    marginRight: 20, // set the right margin to 20
    alignItems: 'flex-start', // align the content to the left
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 5,
  },
  list: {
    fontSize: 16,
    marginLeft: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginLeft:20,
    paddingVertical: 0,
    backgroundColor: '#fff',
  },
  note: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },

  button: {
    width: "90%",
    height: '10%',
    marginBottom: 50,
    paddingHorizontal: 50,
    marginLeft:20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f08080",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  }
});




























// // without modal
// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function BreathingTechniques() {
//   return (
//     <View style={styles.container}>
      

//       <View style={styles.technique}>
//         <Text style={styles.title}>Single Breath and Hold Technique</Text>
//         <Text style={styles.description}>- Recommended for patients who can coordinate breathing with inhaler</Text>
//         <Text style={styles.description}>- Involves taking a slow, deep breath through the spacer while simultaneously pressing the inhaler, holding your breath for 10 seconds before exhaling slowly.</Text>
//       </View>

//       <View style={styles.technique}>
//         <Text style={styles.title}>Tidal or Multiple Breathing Technique</Text>
//         <Text style={styles.description}>- Recommended for patients with difficulty coordinating breathing and the use of inhalers, e.g. children and elderly patients.</Text>
//         <Text style={styles.description}>- Also recommended if you are:</Text>
//         <Text style={styles.list}>- Unable to hold your breath for 5 seconds after using your inhaler</Text>
//         <Text style={styles.list}>- Having an asthma attack</Text>
//         <Text style={styles.description}>- Involves taking several normal breaths in and out through the spacer after each puff of medication.</Text>
//       </View>

//       <Text style={styles.note}>Check with your doctor which technique is suitable for you</Text>

//       <Button title="Step-by-Step Guide" onPress={() => console.log("Go to next page")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingVertical: 25
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   technique: {
//     marginBottom: 10
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 5,
//     marginTop: 5,
//     textAlign: 'justify',
//     marginLeft: 15,
//     marginRight: 15,
//   },
//   list: {
//     fontSize: 16,
//     marginLeft: 30,
//     marginBottom: 5,
//   },
//   note: {
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   }
// });


