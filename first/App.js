//rnfes

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterSamples from './src/samples/CounterSamples'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/login/Login'
import Home from './src/screens/home/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  return (

    <>
      {/* <Text style={styles.text}>Oguzhan</Text> 
       <Text style={{color: 'blue', fontSize: 50, textAlign: 'center'}}>Oguzhan</Text> 
       <Button title="Dokun" onPress={() => console.log('hello')} /> 
       <CounterSamples/> */}
      <NavigationContainer >
       <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ title: 'Merhaba' }}/>
        <Stack.Screen name="Home" component={Home} />
       </Stack.Navigator>
      </NavigationContainer>
    </>
  )
   
}

export default App

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 60
  },
})
