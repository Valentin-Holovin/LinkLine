import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EmojiSmile } from '../../../assets'
import { Colors } from '../../../theme'
import { Button } from '../../../components'
import { navigate } from '../../../navigation/NavigationService'
import { Routes } from '../../../navigation/Routes'

export const WelcomeScreen = () => {

  const handleNavigation = () => {
    navigate(Routes.LOG_IN_SCREEN);
  }

  return (
    <View style={styles.container}>
      <EmojiSmile />

      <Text style={styles.title}>
        Welcome to LinkLine
      </Text>

      <View style={styles.buttonContainer}>
        <Button 
          title='Jump now' 
          onPress={handleNavigation} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: '700',
    fontSize: 36,
    color: Colors.black,
    width: 220,
    textAlign: 'center',
    marginTop: 16
  },
  buttonContainer: {
    width: '85%',
    marginTop: 30,
  }
})
