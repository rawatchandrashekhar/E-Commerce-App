import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../screens/Dashboard'
import Main from '../../screens/Main'
import ProductSearching from '../../screens/ProductSearching'
import DrawerNavigation from '../drawer/DrawerNavigation'
import { navigationRef } from '../navigationService/NavigationService'
import Favourite from '../../screens/Favourite'
import Splash from '../../screens/Splash'
import ProductDescription from '../../screens/ProductDescription'
import Login from '../../screens/Login'

const Stack = createNativeStackNavigator()

const MainNavigationStack = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Splash' >
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='ProductSearching' component={ProductSearching} options={{ headerShown: false }} />
                <Stack.Screen name='Favourite' component={Favourite} options={{ headerShown: false }} />
                <Stack.Screen name='ProductDescription' component={ProductDescription} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigationStack