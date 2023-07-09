import { openDatabase } from "react-native-sqlite-storage"

var db = openDatabase({ name: 'Shoppy.db' })

const insertUserDetail = async () => {
    try {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "INSERT INTO UserDetail (UserName, UserNumber, UserMail,UserPassword,UserAddress) VALUES ('Chandra Shekhar Rawat',9009574613,'chandu@gmail.com',12345,'Gwalior (M.P.)')",
                [],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        console.log("RESULT INSERTED!");
                    } else {
                        alert('Registration Failed')
                    }
                }
            );
        });
    } catch (e) {
        console.log("EXCEPTION IN INSERT USER DETAIL", e);
    }
}

export { insertUserDetail, db }
