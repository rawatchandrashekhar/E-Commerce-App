import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import React from 'react'
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack'
import { store } from './src/storage/redux/Store';
import { Provider } from 'react-redux';
import { createUserTable } from './src/helper/sqliteDatabase/createTable/CreateUserTable.js';
import { insertUserDetail } from './src/helper/sqliteDatabase/insertData/InsertUserDetail';

const App = () => {

    React.useEffect(() => {
        async function temp() {
            await createUserTable()
        }
        temp().then(() => {
            insertUserDetail()
        }).catch((e) => {
            console.log("EXCEPTION IN INSERT USER DETAIL IN APP", e);
        })
    }, [])

    return (
        <Provider store={store}>
            <MainNavigationStack />
            <FlashMessage />
        </Provider>
    )
}

export default App