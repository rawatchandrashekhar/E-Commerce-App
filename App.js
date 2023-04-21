import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar, View } from "react"
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack'
import { store } from './src/storage/redux/Store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigationStack />
        </Provider>
    )
}

export default App