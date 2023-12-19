

const dbConfig = require('../config/db.config');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_DIALECT = process.env.DB_DIALECT
const DB_POOL_MAX = process.env.DB_POOL_MAX
const DB_POOL_MIN = process.env.DB_POOL_MIN
const DB_ACQUIRE = process.env.DB_ACQUIRE
const DB_IDLE = process.env.DB_IDLE


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

// const sequelize = new Sequelize(dbConfig.configCloud.DB, dbConfig.configCloud.USER,
//     dbConfig.configCloud.PASSWORD, {
//         host: dbConfig.configCloud.HOST,
//         dialect: dbConfig.configCloud.dialect,
//         operationsAliases: false,
//         pool: {
//         max: dbConfig.configCloud.pool.max,
//         min: dbConfig.configCloud.pool.min,
//         acquire: dbConfig.configCloud.pool.acquire,
//         idle: dbConfig.configCloud.pool.idle
//         }
//         })

const sequelize = new Sequelize(
    DB_DATABASE, 
    DB_USER,
    DB_PASSWORD, {
        host: DB_HOST,
        dialect: 'mysql',
        operationsAliases: false,
        pool: {
        max: DB_POOL_MAX,
        min: DB_POOL_MIN,
        acquire: DB_ACQUIRE,
        idle: DB_IDLE
        }
        })

module.exports.database = sequelize;