import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer"
import Dashboard from './Dashboard'
import ProductSearching from './ProductSearching'

const Drawer = createDrawerNavigator()

const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <Drawer.Screen name='Product Searching' component={ProductSearching} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default Main