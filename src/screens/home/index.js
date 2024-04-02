import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterReducer';

const HomeScreen = () => {

  const number = 10;

  const num = useSelector((state) => state.value);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {num}</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Increment" onPress={() => dispatch(increment())} />
        <Button style={styles.button} title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
    marginBottom: 20, // Add some space below the text
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
  },
  button: {
    marginHorizontal: 10, // Add some space between buttons
  },
})

export {HomeScreen};