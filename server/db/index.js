const config = require("../config/config")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    config.db.dbName,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect
    }
)
module.exports = sequelize