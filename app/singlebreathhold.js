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
    <Modal animationType="slide" visible={true}>
      <View style={styles.container}>
        <Swiper showsButtons={false} loop={false} onIndexChanged={handleIndexChange} index={activeIndex}>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 1: Assemble the spacer, as shown in the photo below.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 2: Hold your inhaler upright, remove the dust cap and shake it well.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 3: Put your inhaler into the hole at the back of the spacer.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 4: Sit or stand straight and tilt your chin up.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 5: Breathe out away from the inhaler and spacer gently and slowly.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 6: Place the mouthpiece of the spacer in your mouth and close your lips around it to create a tight seal.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 7: Press the canister on the inhaler once and breathe in slowly and steadily until your lungs feel full.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 8: Take the mouthpiece of the spacer out of your mouth and with your lips closed, hold your breath for up to ten seconds or as long as you comfortably can.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 9: Gently breathe out from the spacer.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 10: If you have been prescribed more than one puff, wait for 30 seconds to a minute, ensure that the spacer is away from your mouth, shake the inhaler and repeat the steps.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Step 11: After you have completed the medication, replace the dust cap on the inhaler and clean the spacer as instructed.  </Text>
          </View>

          {/* <View style={styles.slide}>
            <Text style={[styles.title, {textAlign: 'left'}]}>Tidal or Multiple Breathing Technique</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Recommended for patients with difficulty coordinating breathing and the use of inhalers, e.g. children and elderly patients. </Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Also recommended if you are:</Text>
            <Text style={[styles.list, {textAlign: 'justify'}]}>- Unable to hold your breath for 5 seconds after using your inhaler</Text>
            <Text style={[styles.list, {textAlign: 'justify'}]}>- Having an asthma attack</Text>
            <Text style={[styles.description, {textAlign: 'justify'}]}>-Involves taking several normal breaths in and out through the spacer after each puff of medication.</Text>
          </View> */}


        </Swiper>
        {/* <View style={styles.footer}>
          <Text style={styles.note}>Consult your doctor for guidance on the appropriate breathing technique for you.</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('/stepbystepguide')}>
            <Text style={styles.buttonText}>Step-by-Step Guide</Text>
        </TouchableOpacity> */}

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10, // set the top margin to 50
    marginLeft: 20, // set the left margin to 20
    marginRight: 20, // set the right margin to 20
  },
  slide: {
    flex: 1,
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
    paddingHorizontal: 20,
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




