import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';

import { MyProfileScreen } from '../screens'

const ProfileStack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{headerShown: false}}>
            <ProfileStack.Screen name={Routes.MY_PROFILE_SCREEN} component={MyProfileScreen} />
        </ProfileStack.Navigator>
    )
};