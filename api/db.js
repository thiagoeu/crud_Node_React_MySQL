import myql from "mysql"

export const db = myql.createConnection({
    host: "localhost",
    user: "root",
    password: "cen1051",
    database: "crud2"
})