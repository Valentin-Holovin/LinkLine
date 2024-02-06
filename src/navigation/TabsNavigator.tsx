import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Routes } from './Routes'
import { EventNavigator } from './EventNavigator'
import { ProfileNavigator } from './ProfileNavigator'
import { ChatNavigator } from './ChatNavigator'
import { Colors } from '../theme'
import { shadows } from '../helpers'
import { View } from 'react-native'
import { EventIcon, MessageIcon, ProfileIcon } from '../assets'

interface TabBarButtonProps {
    focused: boolean;
    icon: React.FC<{ color: string }>;
}

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {

    const screenOptions: BottomTabNavigationOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',  
          backgroundColor: Colors.white,
          height: 61,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        },
        ...shadows
    };

    const TabBarButton: React.FC<TabBarButtonProps> = ({ focused, icon: Icon }) => (
        <View>
          <Icon color={focused ? Colors.black : Colors.gray} />
        </View>
    );

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name={Routes.EVENT_SCREEN} 
                component={EventNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarButton 
                          focused={focused} 
                          icon={EventIcon} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name={Routes.CHAT_SCREEN} 
                component={ChatNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarButton 
                          focused={focused} 
                          icon={MessageIcon} 
                        />
                    )
                }} 
            />
            <Tab.Screen 
                name={Routes.PROFILE_SCREEN} 
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarButton 
                          focused={focused} 
                          icon={ProfileIcon} 
                        />
                    )
                }} 
            />
        </Tab.Navigator>
    )
}