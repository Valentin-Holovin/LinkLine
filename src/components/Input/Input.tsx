import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../theme'
import { EyeHideIcon, EyeIcon } from '../../assets'

interface Props {
  lable?: string;
  placeholder?: string;
  value?: string;
  marginTop?: number;
  secureInput?: boolean;
  onChangeText?: (value: string) => void;
  error?: string | null;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<Props> = ({
  lable,
  placeholder,
  value,
  marginTop,
  secureInput,
  onChangeText,
  error,
  onBlur,
  onFocus
}) => {

  const [isSecure, setIsSecure] = useState(secureInput)

  const handleShowPassword = () => {
    setIsSecure(!isSecure)
  }

  return (
    <View style={[{ marginTop: marginTop }]}>
      <Text style={styles.lable}>{lable}</Text>

      <TextInput
        style={[
          styles.input, 
          { paddingRight: secureInput ? 38 : 0, borderColor: error ? Colors.red : Colors.black }
        ]}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isSecure}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

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
      borderWidth: 1,
      paddingLeft: 14,
    },
    secureButton: {
      position: 'absolute',
      top: 38,
      right: 12  
    },
    errorText: {
      color: Colors.red,
      fontSize: 12,
      marginTop: 6
    }
})