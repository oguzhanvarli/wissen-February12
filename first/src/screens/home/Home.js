import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed';

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products').then(res => res.data)
      console.log(response)
      setProducts(response.products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{ flexDirection: 'row' }}>

      <FlatList
        data={products}
        renderItem={({ item }) =>
          <>
            <Card.Title>{item.title}</Card.Title>
            <View style={{ position: "relative", alignItems: "center",marginBottom: 15 }}>
              <Image
                style={{ width: 150, minWidth: 150, height: 100 }}
                resizeMode="contain"
                source={{ uri: item.thumbnail }}
              />
              <Text style={styles.price} >{item.price}$</Text>
              <Button title="Add to Cart" onPress={null}  color='red'/>
            </View>
            <Card.Divider />
          </>}
        // horizontal
        ListHeaderComponent={<Text style={{ color: 'red' }}>Oğuzhanın Hikayeleri bölümü</Text>}
        ListFooterComponent={<Text style={{ color: 'red' }}>Burası son Taraf</Text>}
      />

      {/* <Button onPress={getProducts} title="Get Products" /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  }
})