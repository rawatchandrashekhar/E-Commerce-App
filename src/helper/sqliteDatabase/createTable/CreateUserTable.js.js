import { openDatabase } from "react-native-sqlite-storage"

var db = openDatabase({ name: 'Shoppy.db' })

const createUserTable = async () => {
    try {
        await db.transaction(async (txn) => {
            await txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='UserDetail'",
                [],
                (tx, res) => {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS UserDetail', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS UserDetail(UserId INTEGER PRIMARY KEY AUTOINCREMENT, UserName VARCHAR(20), UserNumber INT(10), UserMail TEXT, UserPassword TEXT, UserAddress TEXT)',
                            []
                        );
                    }
                }
            );
        });
    } catch (e) {
        console.log("EXCEPTION IN CREATE USER DETAIL TABLE", e);
    }
}

export { createUserTable, db }