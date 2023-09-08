const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');


var Company = database.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    head_office_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

module.exports.Company = Company;