import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    getProducts()
  },[])
  

  const getProducts = async() => {
    try {
      let response = await axios.get('https://dummyjson.com/products').then(res => res.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <Text>Home</Text>
      {/* <Button onPress={getProducts} title="Get Products" /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})