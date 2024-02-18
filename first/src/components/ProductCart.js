import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

const ProductCart = ({item}) => {
  const dispatch = useDispatch()
  return (
    <>
      <Card.Title>{item.title}</Card.Title>
      <View style={{ position: "relative", alignItems: "center", marginBottom: 15 }}>
        <Image
          style={{ width: 150, minWidth: 150, height: 100 }}
          resizeMode="contain"
          source={{ uri: item.thumbnail }}
        />
        <Text style={styles.price} >{item.price}$</Text>
        <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} color='indianred' />
      </View>
      <Card.Divider />
    </>
  )
}

export default ProductCart

const styles = StyleSheet.create({})