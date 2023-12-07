

const dbConfig = require('../config/db.config');
const { Sequelize } = require('sequelize')


// const sequelize = new Sequelize(dbConfig.config.DB, dbConfig.config.USER,
//     dbConfig.config.PASSWORD, {
//         host: dbConfig.config.HOST,
//         dialect: dbConfig.config.dialect,
//         operationsAliases: false,
//         pool: {
//         max: dbConfig.config.pool.max,
//         min: dbConfig.config.pool.min,
//         acquire: dbConfig.config.pool.acquire,
//         idle: dbConfig.config.pool.idle
//         }
//     })

const sequelize = new Sequelize(dbConfig.configCloud.DB, dbConfig.configCloud.USER,
    dbConfig.configCloud.PASSWORD, {
        host: dbConfig.configCloud.HOST,
        dialect: dbConfig.configCloud.dialect,
        operationsAliases: false,
        pool: {
        max: dbConfig.configCloud.pool.max,
        min: dbConfig.configCloud.pool.min,
        acquire: dbConfig.configCloud.pool.acquire,
        idle: dbConfig.configCloud.pool.idle
        }
        })

module.exports.database = sequelize;