import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal,TouchableOpacity,Image } from 'react-native';
import { useRouter } from "expo-router";
import Swiper from 'react-native-swiper';

export default function SingleBreath() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (index) => {
    setActiveIndex(index);
  }

  return (
    <View style={styles.container}>
      <Swiper showsButtons={false} loop={false} onIndexChanged={handleIndexChange} index={activeIndex}>
        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 1:</Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Assemble the spacer, according to the image below.</Text>
          <Image source={require("../assets/images/spacer.png")} style={styles.ModelImage} />
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 2: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Hold your inhaler upright, remove the dust cap and shake it well.</Text>
          <Image source={require("../assets/gif/shake_inhaler.gif")} style={styles.ModelImage} />
        </View>            

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 3: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Put your inhaler into the hole at the back of the spacer.</Text>
        </View>


        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 4: </Text>  
          <Text style={[styles.title, {textAlign: 'justify'}]}>Breathe out away from the inhaler and spacer gently and slowly.</Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 5: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Tilt your chin up. </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Place the mouthpiece of the spacer in your mouth and close your lips around it to create a tight seal.</Text>
          <Image source={require("../assets/gif/tilt_head_big.gif")} style={styles.ModelImage} />
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 6: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Press the canister on the inhaler once and breathe in slowly and steadily until your lungs feel full.</Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 7: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Take the mouthpiece of the spacer out of your mouth. </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Hold your breath for up to ten seconds or as long as you comfortably can.</Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 8: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Gently breathe out from the spacer.</Text>
        </View>


        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 9: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>After you have completed the medication, replace the dust cap on the inhaler and clean the spacer.  </Text>
        </View>



      </Swiper>
      {/* <View style={styles.footer}>
        <Text style={styles.note}>Consult your doctor for guidance on the appropriate breathing technique for you.</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/stepbystepguide')}>
          <Text style={styles.buttonText}>Step-by-Step Guide</Text>
      </TouchableOpacity> */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  slide: {
    flex: 1,
    alignItems: 'flex-start', // align the content to the left
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
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
  ModelImage: {
    marginTop: 20,
    width:300,
    height:300,
    resizeMode:'contain',
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




