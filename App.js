import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/spacerchild.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>

      </View>
      {/* <Text style ={{color:'#fff'}}>HELLO WORLD!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',/* WANT TO CHANGE TH COLOUR TO FULL BLACK LATER #000000 */
    alignItems: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:30,
  },
  image:{
    width:425,
    height:440,
    borderRadius:18,
  },
    
  },
);
