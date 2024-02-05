import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackLeftIcon } from '../../assets'
import { Colors } from '../../theme'
import { goBack } from '../../navigation/NavigationService'

interface Props {
    title: string
    isBack?: boolean 
}

export const Header: React.FC<Props> = ({
    title,
    isBack
}) => {

  const handleNavigation = () => {
    goBack()
  }

  return (
    <View style={styles.container}>

      {isBack && (
        <TouchableOpacity
            style={styles.backIcon}
            onPress={handleNavigation}
        >
            <BackLeftIcon />
        </TouchableOpacity>
      )}  

      <Text style={styles.title}>
        {title}
      </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 22
    },
    title: {
      fontSize: 28,
      color: Colors.black,
      fontWeight: '700',
    },
    backIcon: {
      position: 'absolute',
      top: 6,
      left: 20,
    }
})