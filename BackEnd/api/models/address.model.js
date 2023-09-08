const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Country } = require('./country.model');
const County = require('./county.model').County;
var Address = database.define('address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    line1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    line2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    county_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {tableName: 'address', timestamps: false})

Address.belongsTo(County, {foreignKey: 'county_id'});
County.hasOne(Address, {foreignKey: 'county_id'});

Address.belongsTo(Country, {foreignKey: 'country_id'});
Country.hasOne(Address, {foreignKey: 'country_id'});

module.exports.Address = Address;