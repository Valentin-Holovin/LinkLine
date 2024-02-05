import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../theme';

interface Props {
    title: string;
    onPress?: () => void
}

export const Button: React.FC<Props> = ({
    title,
    onPress,
}) => {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: Colors.blue01,
    height: 48,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white
  }
})