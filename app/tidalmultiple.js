import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal,TouchableOpacity,Image } from 'react-native';
import { useRouter } from "expo-router";
import Swiper from 'react-native-swiper';

export default function TidalBreathing() {
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
          {/* <Text style={[styles.title, {textAlign: 'justify'}]}>Hold your inhaler upright, remove the dust cap and shake it well.</Text> */}
          <Text style={[styles.title, {textAlign: 'justify'}]}>Remove cap from inhaler, shake the inhaler and insert inhaler into the spacer as shown.</Text>
          <View style={{flexDirection: 'column'}}>
            <Image source={require("../assets/gif/inhaler_cap_remove.gif")} style={styles.smallModelImage} />
            <Image source={require("../assets/gif/shake_inhaler.gif")} style={styles.smallModelImage} />
          </View>
        </View>            


        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 3: </Text>  
          <Text style={[styles.title, {textAlign: 'justify'}]}>Tilt your chin up. </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Place the mouthpiece of the spacer in your mouth and close your lips around it to create a tight seal.</Text>
          <Image source={require("../assets/gif/tilt_head_big.gif")} style={styles.ModelImage} />
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 4: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Press the canister on the inhaler once to release the medication into the spacer. </Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 5: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Breathe in and out normally for about 5 breaths, making sure you inhale and exhale through the space. </Text>
          <Text style={[styles.subtitle, {textAlign: 'justify'}]}>Note: You should see the valve in the spacer move for each breath.</Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 6: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Shake the inhaler again after every spray of medication.</Text>
          <Image source={require("../assets/gif/shake_inhaler.gif")} style={styles.ModelImage} />
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 7: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Repeat steps 5 and 6 as many times as instructed by the doctor, using one puff of the inhaler at a time. </Text>
        </View>

        <View style={styles.slide}>
          <Text style={[styles.title, {textAlign: 'justify'}]}>Step 8: </Text>
          <Text style={[styles.title, {textAlign: 'justify'}]}>After you have completed the medication, replace the dust cap on the inhaler and clean the spacer as instructed.  </Text>
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

  subtitle: {
    fontSize: 15,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 5,
  },
  smallModelImage: {
    marginTop: 10,
    width:150,
    height:150,
    resizeMode:'contain',
    
  },
  ModelImage: {
    marginTop: 20,
    width:300,
    height:300,
    resizeMode:'contain',
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




