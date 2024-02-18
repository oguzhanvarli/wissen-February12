import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem } from '@rneui/themed';
import { useSelector } from 'react-redux'
import { Avatar } from '@rneui/base';

const Cart = () => {
  const products = useSelector(state => state.cart.products)
  // console.log(products)
  return (
    <View>
      <FlatList data={products}
        renderItem={({ item }) => (
          <>
            <ListItem bottomDivider>
              <Avatar
                source={{ uri: item.thumbnail }}
              />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.price}$</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})