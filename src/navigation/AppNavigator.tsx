import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import { navigationRef } from './NavigationService';
import { AuthNavigator } from './AuthNavigator';

import { 
  
} from '../screens';
import { TabsNavigator } from './TabsNavigator';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <AppStack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
                <AppStack.Screen name={Routes.AUTH} component={AuthNavigator}  />
                <AppStack.Screen name={Routes.TABS} component={TabsNavigator} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
  };