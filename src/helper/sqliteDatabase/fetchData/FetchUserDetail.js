import { openDatabase } from "react-native-sqlite-storage"

var db = openDatabase({ name: 'Shoppy.db' })

const fetchUserDetail = () => {

}

export { fetchUserDetail, db }