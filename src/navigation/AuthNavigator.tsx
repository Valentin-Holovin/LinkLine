import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';

import { LoginScreen, RegistrationScreen, WelcomeScreen } from '../screens'

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={Routes.WELCOME_SCREEN} component={WelcomeScreen} />
            <AuthStack.Screen name={Routes.LOG_IN_SCREEN} component={LoginScreen} />
            <AuthStack.Screen name={Routes.REGISTRATION_SCREEN} component={RegistrationScreen} />
        </AuthStack.Navigator>
    )
};