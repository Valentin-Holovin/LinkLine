import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { InvertedEmoji } from '../../assets'
import { Colors } from '../../theme'

export const EmptyPostComponents = () => {
  return (
    <View style={styles.container}>
      <InvertedEmoji/>

      <Text style={styles.title}>
        No events
      </Text>

      <TouchableOpacity>
        <Text style={styles.linkButtonText}>create event +</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 120
    },
    title: {
      fontSize: 26,
      fontWeight: '500',
      color: Colors.black,
      marginBottom: 20  
    },
    linkButtonText: {
      color: Colors.blue01,
      fontWeight: '500',
    }
  })