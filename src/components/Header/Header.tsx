import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackLeftIcon, PlusIcon } from '../../assets'
import { Colors } from '../../theme'
import { goBack } from '../../navigation/NavigationService'

interface Props {
    title: string
    isBack?: boolean
    isAddButton?: boolean 
}

export const Header: React.FC<Props> = ({
    title,
    isBack,
    isAddButton
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

      {isAddButton && (
        <TouchableOpacity style={styles.addButton}>
          <PlusIcon />
        </TouchableOpacity>
      )}
      
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
      top: 5,
      left: 20,
    },
    addButton: {
      position: 'absolute',
      top: 5,
      right: 20,
    }
})