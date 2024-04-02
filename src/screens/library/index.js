import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterReducer';

const LibraryScreen = () => {

  const number = 10;

  const num = useSelector((state) => state.value);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {num}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
})

export {LibraryScreen};