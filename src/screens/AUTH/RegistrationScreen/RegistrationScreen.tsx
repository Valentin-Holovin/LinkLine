import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../../components'
import { Colors } from '../../../theme'
import { useValidation } from '../../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { fetchRegistration, setEmail, setName, setPassword } from '../../../store/reducers/authReducer'

export const RegistrationScreen = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { 
    email, 
    password,
    name, 
    loading 
  } = useSelector((state: RootState) => state.authReducer)

  const { 
    validateEmail, 
    validatePassword,
    validateName,
    focused, 
    onFocus, 
    onBlur,
  } = useValidation();

  const handleRegistration = () => {
    dispatch(fetchRegistration({ 
      email: email || '', 
      password: password || '', 
      name: name || '' 
    }));
  };

  return (
    <View style={styles.container}>
      <Header title='Registration' isBack />

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
            lable='Name'
            placeholder='Name'
            marginTop={22}
            value={name}
            onChangeText={(text) => dispatch(setName(text))}
            error={focused ? validateName(name).error : undefined}
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
          <Button 
            title='Registration'
            loading={loading}
            onPress={handleRegistration} 
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
