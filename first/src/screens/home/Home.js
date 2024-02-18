import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '@rneui/themed';
import HeaderCart from '../../components/HeaderCart';
import ProductCart from '../../components/ProductCart';

const Home = ({navigation}) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products').then(res => res.data)
      // console.log(response)
      setProducts(response.products)
    } catch (error) {
      console.log(error)
    }
  }
  const goToCart = () => {
    navigation.navigate('Cart')
  }
  return (
    <View>
      <HeaderCart onPress={goToCart} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCart item={item} />}
        // horizontal
        // ListHeaderComponent={<Text style={{ color: 'red' }}>Oğuzhanın Hikayeleri bölümü</Text>}
        // ListFooterComponent={<Text style={{ color: 'red' }}>Burası son Taraf</Text>}
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