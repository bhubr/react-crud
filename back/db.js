const mysql = require('mysql')
const { host, user, password, database } = require('./db-settings.json')

const connection = mysql.createConnection({ host, user, password, database })

module.exports = connection
