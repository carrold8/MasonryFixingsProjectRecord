const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { CompanyType } = require('./companytype.model');
const {HeadOffice} = require('./headoffice.model');


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

Company.belongsTo(CompanyType, {foreignKey: 'company_type_id'});
Company.belongsTo(HeadOffice, {foreignKey: 'head_office_id'});

module.exports.Company = Company;