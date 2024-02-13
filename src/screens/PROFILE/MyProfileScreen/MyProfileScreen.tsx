import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Header } from '../../../components';
import { Colors } from '../../../theme';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { fetchLogout } from '../../../store/reducers/authReducer';

export const MyProfileScreen = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(fetchLogout())
  }

  return (
    <View style={styles.container}>
      <Header 
        title='My Profile' 
        isLogoutButton 
        handleLogout={handleLogout} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
})
