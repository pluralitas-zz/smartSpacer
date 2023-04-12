import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function BreathingTechniques() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.technique}>
        <Text style={styles.title}>Tips</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.description}>Remember to shake your inhaler before using it.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>2.</Text>
          <Text style={styles.description}>Lift your chin slightly before breathing in.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>3.</Text>
          <Text style={styles.description}>Ensure that there is a tight lip seal between the mouthpiece and your mouth.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>4.</Text>
          <Text style={styles.description}>Wait 30 seconds to 1 minute in between puffs.</Text>
        </View>
      </View>

      <View style={styles.technique}>
        <Text style={styles.title}>Common Mistakes</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>1.</Text>
          <Text style={styles.description}>Forgetting to use your inhaler at the same time every day.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.number}>2.</Text>
          <Text style={styles.description}>Forgetting to bring your inhaler out with you.</Text>
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  technique: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:30,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  number: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
    marginTop: 2,
  },
  description: {
    fontSize: 16,
    flex: 1,
    textAlign: 'justify',
    marginLeft: 5,
  },
});
