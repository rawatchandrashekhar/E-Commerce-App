import AsyncStorage from '@react-native-async-storage/async-storage';

const storeStringData = async (storage_Key, value) => {
    try {
        await AsyncStorage.setItem(storage_Key, value)
    } catch (e) {
        console.log("EXCEPTION IN STORE STRING DATA", e);
    }
}

const storeObjectData = async (storage_Key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(storage_Key, jsonValue)
    } catch (e) {
        console.log("EXCEPTION IN STORE OBJECT DATA", e);
    }
}


const getStringData = async (storage_Key) => {
    try {
        const value = await AsyncStorage.getItem(storage_Key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log("EXCEPTION IN GET STRING DATA", e);
    }
}

const getObjectData = async (storage_Key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(storage_Key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("EXCEPTION IN GET OBJECT DATA", e);
    }
}

export { storeStringData, storeObjectData, getStringData, getObjectData }