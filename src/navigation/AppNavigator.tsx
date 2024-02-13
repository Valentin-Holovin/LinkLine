import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import { navigate, navigationRef } from './NavigationService';
import { AuthNavigator } from './AuthNavigator';

import { 
  
} from '../screens';
import { TabsNavigator } from './TabsNavigator';
import { useGetToken } from '../hooks';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {

    const { accessToken, refreshToken } = useGetToken();

    useEffect(() => {
      if (accessToken && refreshToken) {
        navigate(Routes.TABS);
      }
    }, [accessToken, refreshToken]);

    return (
        <NavigationContainer ref={navigationRef}>
            <AppStack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
                <AppStack.Screen name={Routes.AUTH} component={AuthNavigator} />
                <AppStack.Screen name={Routes.TABS} component={TabsNavigator} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
  };