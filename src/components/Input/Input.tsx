import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme'
import { EyeHideIcon, EyeIcon } from '../../assets'

interface Props {
    lable?: string,
    placeholder?: string
    value?: string
    marginTop?: number
    secureInput?: boolean
}

export const Input: React.FC<Props> = ({
    lable,
    placeholder,
    value,
    marginTop,
    secureInput
}) => {

  const [isSecure, setIsSecure] = useState(secureInput)

  const handleShowPassword = () => {
    setIsSecure(!isSecure)
  }

  return (
    <View style={[{ marginTop: marginTop }]}>
      <Text style={styles.lable}>{lable}</Text>

      <TextInput
        style={[styles.input, { paddingRight: secureInput ? 38 : 0 }]}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isSecure}
      />

      {secureInput && (
        <TouchableOpacity
            style={styles.secureButton}
            onPress={handleShowPassword}
        >
            {isSecure ? <EyeIcon /> : <EyeHideIcon />}
        </TouchableOpacity>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
    lable: {
      color: Colors.black,
      marginBottom: 6
    },
    input: {
      height: 48,
      borderRadius: 8,
      borderColor: Colors.black,
      borderWidth: 1,
      paddingLeft: 14,
    },
    secureButton: {
      position: 'absolute',
      top: 38,
      right: 12  
    }
})