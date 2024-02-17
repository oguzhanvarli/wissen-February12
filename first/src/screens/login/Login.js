import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!')
    .min(4, 'Username must be 4 min charachters')
    .max(20, 'Username must be 20 max charachters'),
  password: Yup.string().required('Password is required')
    .min(4, 'Password must be 4 min charachters')
})

const Login = ({ navigation }) => {


  const handleLogin = async(values) => {
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", values)
      if(response.data){
        Toast.show({
          type: 'success',
          text1: 'Welcome',
          text2: `Welcome back ${response.data.username}`
        })
        navigation.navigate('Home')
      }
    } catch (error) {
      // console.log(error.response.data.message)
      Toast.show({
        type: 'error',
        text1: "Error",
        text2: error.response?.data?.message
      })
    }
   
  }

  return (
    <Formik
      initialValues={{ username: "kminchelle", password: "0lelplR" }}
      onSubmit={values => (handleLogin(values))}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('username')}
            value={values.username}
            onBlur={handleBlur('username')}
          />
          {errors.username && touched.username ? <Text
            style={styles.errorText}
          >{errors.username}</Text> : null}
          <TextInput
            style={styles.input}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={true}
          />
          {errors.password && touched.password ? <Text
            style={styles.errorText}
          >{errors.password}</Text> : null}
          <View style={styles.button}>
            <Button onPress={handleSubmit} title='Login' color={'#87CEFA'}
             
            />
          </View>

        </View>
      )}

    </Formik>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DCDCDC',
    margin: 10,
    color: 'black'
  },
  errorText: {
    color: 'indianred',
    marginLeft: 10,
  },
  button: {
    margin: 20
  }
})