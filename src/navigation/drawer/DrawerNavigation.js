import React from 'react'
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import BottomNavigationStack from '../bottomNavigator/BottomNavigationStack';
import DrawerContent from './DrawerContent';
import Dashboard from '../../screens/Dashboard';
import BottomTabNavigator from '../bottomTabNavigator/BottomTabNavigator';

const DrawerNav = createDrawerNavigator();

const { width, height } = Dimensions.get("screen")

export default function DrawerNavigation(props) {
    return (
        <DrawerNav.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'tranparent',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    overflow: 'hidden',
                    width: width
                },
            }}
            initialRouteName="Dashboard">
            <DrawerNav.Screen
                name="Dashboard"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </DrawerNav.Navigator>
    );
}