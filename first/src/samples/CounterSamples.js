import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CounterSamples = () => {
  let number = 0;
  const [counter, setCounter] = useState(0)

  const increment = () => {
    // console.log('worked')
    // number  = number + 1
    // console.log(number)
    if(counter < 10){
      setCounter(counter + 1)
    }
  }
  const decrement = () => {
    //console.log('azalltım')
    // number -= 1
    // console.log(number)
    // if(counter > 0){
    //   setCounter(counter-1)
    // }

    counter > 0 ? setCounter(counter - 1) : null
  }

  // console.log('ben render olum')

  return (
    <View>
      <Text style={styles.text}>{counter}</Text>
      <Button title='Artır' onPress={increment} />
      <Button title='Azalt' onPress={decrement} />
    </View>
  )
}

export default CounterSamples

const styles = StyleSheet.create({
  text : {
    fontSize: 60,
    color: 'indianred',
    textAlign: 'center',
    marginVertical: 20
  }
})

