import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../../components'
import { Colors } from '../../../theme'

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Header title='Registration' isBack />

      <View style={styles.wrapper}>
        <View style={styles.formWrapper}>
          <Input 
            lable='Email'
            placeholder='Email'
          />

          <Input 
            lable='Name'
            placeholder='Name'
            marginTop={22}
          />

          <Input 
            lable='Password'
            placeholder='Password'
            marginTop={22}
            secureInput
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title='Registration' />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  formWrapper: {
    marginHorizontal: 30
  },
  linkText: {
    color: Colors.blue01,
    textDecorationLine: 'underline',
    marginBottom: 18
  },
  buttonWrapper: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 30
  }
})
