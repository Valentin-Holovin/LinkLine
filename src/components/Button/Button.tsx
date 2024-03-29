import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '../../theme';

interface Props {
  title: string;
  onPress?: () => void;
  loading?: boolean; 
  disabled?: boolean; 
}

export const Button: React.FC<Props> = ({
  title,
  onPress,
  loading,
  disabled
}) => {
  return (
    <TouchableOpacity
        style={[styles.container, { backgroundColor: disabled ? Colors.gray01 : Colors.blue01 }]}
        onPress={onPress}
        disabled={disabled}
    >
      {loading 
        ? (
        <ActivityIndicator size={'small'} color={Colors.white}/>
      ) : (
        <Text style={styles.title}>
          {title}
        </Text>
      )}
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
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