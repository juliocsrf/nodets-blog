const dotenv = require('dotenv');
dotenv.config()

let db_options = {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "port": process.env.MYSQL_PORT
}

module.exports = {
  "development": db_options,
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": db_options
}
