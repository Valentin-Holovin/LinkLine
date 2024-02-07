import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../../components'
import { Colors } from '../../../theme'
import { navigate } from '../../../navigation/NavigationService'
import { Routes } from '../../../navigation/Routes'
import { fetchLogin, setEmail, setPassword } from '../../../store/reducers/authReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { useValidation } from '../../../hooks'

export const LoginScreen = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { 
    email, 
    password, 
    loading 
  } = useSelector((state: RootState) => state.authReducer)

  const { 
    validateEmail, 
    validatePassword,
    focused, 
    onFocus, 
    onBlur 
  } = useValidation();

  const handleNavigation = () => {
    navigate(Routes.REGISTRATION_SCREEN)
  }

  const handleLogin = () => {
    dispatch(fetchLogin({ email: email || '', password: password || '' }));
  };

  return (
    <View style={styles.container}>
      <Header title='Login' />

      <View style={styles.wrapper}>
        <View style={styles.formWrapper}>
          <Input 
            lable='Email'
            placeholder='Email'
            value={email}
            onChangeText={(text) => dispatch(setEmail(text))}
            error={focused ? validateEmail(email).error : undefined}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          <Input 
            lable='Password'
            placeholder='Password'
            marginTop={22}
            secureInput
            value={password}
            onChangeText={(text) => dispatch(setPassword(text))}
            error={focused ? validatePassword(password).error : undefined}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={handleNavigation}
          >
            <Text style={styles.linkText}>Register an account</Text>
          </TouchableOpacity>

          <Button 
            title='Login'
            loading={loading} 
            onPress={handleLogin}
          />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  formWrapper: {
    marginHorizontal: 30
  },
  linkText: {
    color: Colors.blue01,
    textDecorationLine: 'underline',
    marginBottom: 18
  },
  buttonWrapper: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 30
  }
})
