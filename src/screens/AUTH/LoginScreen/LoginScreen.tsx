import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../../components'
import { Colors } from '../../../theme'
import { navigate } from '../../../navigation/NavigationService'
import { Routes } from '../../../navigation/Routes'

export const LoginScreen = () => {

  const handleNavigation = () => {
    navigate(Routes.REGISTRATION_SCREEN)
  }

  return (
    <View style={styles.container}>
      <Header title='Login' isBack />

      <View style={styles.wrapper}>
        <View style={styles.formWrapper}>
          <Input 
            lable='Email'
            placeholder='Email'
          />

          <Input 
            lable='Password'
            placeholder='Password'
            marginTop={22}
            secureInput
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={handleNavigation}
          >
            <Text style={styles.linkText}>Register an account</Text>
          </TouchableOpacity>

          <Button title='Login' />
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
