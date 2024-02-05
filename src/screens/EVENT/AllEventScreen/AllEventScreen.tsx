import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../theme'

export const AllEventScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AllEventScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})