import myql from "mysql"

export const db = myql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud2"
})