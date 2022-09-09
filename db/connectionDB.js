const { Pool } = require("pg");

const config = {
    user: "postgres",
    host: "localhost",
    database: "yelp",
    password: "root",
    port: 5432
}

const pool = new Pool(config)

module.exports = {
    query: (text, params) => pool.query(text, params)
}