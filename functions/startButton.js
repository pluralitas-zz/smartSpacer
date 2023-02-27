import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function startButton({ label }) {
  return (
    <View style={styles.startButtonContainer}>
      <Pressable style={styles.startButton} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.startButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  startbuttonContainer: {
    width: 180,
    height: 32,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  startbutton: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#008b8b',
    fontSize: 20,
  },
});