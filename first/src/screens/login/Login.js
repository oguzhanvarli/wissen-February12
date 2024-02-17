import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required!')
    .min(4, 'Username must be 4 min charachters')
    .max(20, 'Username must be 20 max charachters'),
  password: Yup.string().required('Password is required')
    .min(4, 'Password must be 4 min charachters')
})

const Login = ({ navigation }) => {

  const testFunction = (name) => {
    console.log(name)
  }
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={values => (console.log(values))}
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

          <Button onPress={handleSubmit} title='Login' />
        </View>
      )}

    </Formik>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    margin: 10,
    color: 'white'
  },
  errorText: {
    color: 'indianred',
    marginLeft: 10,
  }
})