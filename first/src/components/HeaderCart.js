import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useSelector } from 'react-redux'

const HeaderCart = ({onPress}) => {
  const cartValue = useSelector((state) => state.cart.value)
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={`${cartValue}`} onPress={onPress} color={'indianred'} />
      </View>
    </View>
  )
}

export default HeaderCart

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: "flex-end",
    margin: 20
  },
})