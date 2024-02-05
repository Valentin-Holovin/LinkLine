import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';

import { ChatScreen } from '../screens';

const ChateStack = createNativeStackNavigator();

export const ChatNavigator = () => {
    return (
        <ChateStack.Navigator screenOptions={{headerShown: false}}>
            <ChateStack.Screen name={Routes.ALL_CHAT_SCREEN} component={ChatScreen} />
        </ChateStack.Navigator>
    )
};