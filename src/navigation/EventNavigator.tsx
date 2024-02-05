import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';

import { AllEventScreen } from '../screens'

const EventStack = createNativeStackNavigator();

export const EventNavigator = () => {
    return (
        <EventStack.Navigator screenOptions={{headerShown: false}}>
            <EventStack.Screen name={Routes.ALL_EVENT_SCREEN} component={AllEventScreen} />
        </EventStack.Navigator>
    )
};