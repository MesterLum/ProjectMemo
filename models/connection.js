import mysql from 'mysql'

// Config
import { DB_DB, DB_HOST, DB_PASS, DB_USER } from '../config'

// Singleton pool connection
var pool = undefined;

export default () => {
    if (pool) return pool

    pool = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DB
    })

    return pool
    
}